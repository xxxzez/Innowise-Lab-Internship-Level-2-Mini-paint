import { Box, Button, MenuItem, Paper, Select } from '@material-ui/core'
import {  MouseEvent, useEffect, useRef, useState } from 'react'
import BrushIcon from '@material-ui/icons/Brush'
import './canvas.styles.css'
import CropLandscapeOutlined from '@material-ui/icons/CropLandscape'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RemoveIcon from '@material-ui/icons/Remove'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { createImageInstanceInDB } from '../../core/redux/images/images-actions'
import { storage } from '../../core/firebase/firebase'
import { RootStateType } from '../../core/types/common-types'

type MouseDownType = undefined | null  | number

export const Canvas = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const subCanvasRef = useRef<HTMLCanvasElement | null>(null)
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const [color, setColor] = useState('#743DF5')
	const [dash, setDash] = useState(false)
	const [blur, setBlur] = useState(0)
	const [lineWidth, setLineWidth] = useState<number>(2)
	const [mouseDownX, setMouseDownX] = useState<MouseDownType>()
	const [mouseDownY, setMouseDownY] = useState<MouseDownType>()
	const [context, setContext] =	useState<CanvasRenderingContext2D | null>(null)
	const [subContext, setSubContext] = useState<CanvasRenderingContext2D | null>(null)
	const [tool, setTool] = useState('pencil')
	const user = useSelector((state: RootStateType) => state.auth.user)
	const history = useHistory()
	const dispatch = useDispatch()
	console.log(mouseDownX)
	useEffect(() => {
		if (canvasRef.current && subCanvasRef.current) {
			setContext(canvasRef.current.getContext('2d'))
			setSubContext(subCanvasRef.current.getContext('2d'))
		}
	}, [])

	const clearCanvas = () => {
		context!.clearRect(
			0,
			0,
			canvasRef.current!.width,
			canvasRef.current!.height
		)
		subContext!.clearRect(
			0,
			0,
			subCanvasRef.current!.width,
			subCanvasRef.current!.height
		)
	}

	const onMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
		const target = e.target as HTMLCanvasElement;
		setMouseDownX(e.pageX - target.offsetLeft)
		setMouseDownY(e.pageY - target.offsetTop)
	}

	const onMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
		const target = e.target as HTMLCanvasElement;
		if (
			context &&
			mouseDownX &&
			mouseDownY &&
			wrapperRef.current &&
			canvasRef.current
		) {
			context.strokeStyle = color
			context.lineWidth = lineWidth
			context.lineCap = 'round'
			context.shadowColor = color
			context.shadowBlur = blur;
	
			if(dash){
				context.setLineDash([5, 20])
			} else {
				context.setLineDash([])
			}
		
			context.clearRect(
				0,
				0,
				canvasRef.current.width,
				canvasRef.current.height
			)

			switch (tool) {
				case 'pencil':
					context.lineTo(
						e.pageX - target.offsetLeft,
						e.pageY - target.offsetTop
					)
					context.stroke()
					break
				case 'rectangle':
					let width =
						e.pageX - mouseDownX - wrapperRef.current.offsetLeft
					let height =
						e.pageY - mouseDownY - wrapperRef.current.offsetTop
					context.strokeRect(mouseDownX, mouseDownY, width, height)
					context.stroke()
					break
				case 'circle':
					context.beginPath()
					context.arc(
						mouseDownX,
						mouseDownY,
						Math.sqrt(
							(e.pageX -
								mouseDownX -
								wrapperRef.current.offsetLeft) **
								2 +
								(e.pageY -
									mouseDownY -
									wrapperRef.current.offsetTop) **
									2
						),
						0,
						Math.PI * 2,
						false
					)
					context.stroke()
					break
				case 'line':
					context.beginPath()
					context.moveTo(mouseDownX, mouseDownY)
					context.lineTo(
						e.pageX - wrapperRef.current.offsetLeft,
						e.pageY - wrapperRef.current.offsetTop
					)
					context.stroke()
					break
				default:
					break
			}
		}
	}

	const onMouseUp = (e: MouseEvent<HTMLCanvasElement>) => {
		if (context && subContext) {
			subContext.drawImage(canvasRef.current!, 0, 0)
			context.beginPath()
			setMouseDownX(null)
			setMouseDownY(null)
		}
	}

	const saveImage = async () => {
		const date = Date.now()
		const imageURL = subContext!.canvas?.toDataURL()
		const imagePath = `images/${user!.uid}/${date}.png`
		await storage.ref().child(imagePath).putString(imageURL, 'data_url')
		const imageDatabaseURL = await storage
			.ref(`images/${user!.uid}/${date}.png`)
			.getDownloadURL()
		dispatch(createImageInstanceInDB(user, imageDatabaseURL, date, imagePath))
		history.push('/')
	}

	const handleDash = () => {
		setDash( dash === false ? true : false)
	}
	const handleBlur = () => {
		setBlur( blur === 0 ? 10 : 0)
	}
	const amountOfWidthOption = []
	for(let i = 1; i <101; i++){
		amountOfWidthOption.push(i)
	}
	return (
		<Box className="canvas-box">
			<Box className="buttons">
				<Button
					variant="contained"
					color={tool === 'pencil' ? 'primary' : 'inherit'}
					onClick={() => setTool('pencil')}
				>
					<BrushIcon />
				</Button>
				<Button
					variant="contained"
					color={tool === 'rectangle' ? 'primary' : 'inherit'}
					onClick={() => setTool('rectangle')}
				>
					<CropLandscapeOutlined />
				</Button>
				<Button
					color={tool === 'circle' ? 'primary' : 'inherit'}
					variant="contained"
					onClick={() => setTool('circle')}
				>
					<RadioButtonUncheckedIcon />
				</Button>
				<Button
					color={tool === 'line' ? 'primary' : 'inherit'}
					variant="contained"
					onClick={() => setTool('line')}
				>
					<RemoveIcon />
				</Button>
				<Button
					color={dash === true ? 'primary' : 'inherit'}
					variant="contained"
					onClick={handleDash}
				>
					Dash
				</Button>
				<Button
					color={blur > 0 ? 'primary' : 'inherit'}
					variant="contained"
					onClick={handleBlur}
				>
					Blur
				</Button>
				<input
					type="color"
					value={color}
					onChange={(event) => setColor(event.target.value)}
				/>
				<Select
					className="select"
					value={lineWidth}
					onChange={(e: React.ChangeEvent<{ value: unknown }>) => setLineWidth(e.target.value as number)}
				>
					{
					amountOfWidthOption.map(num => <MenuItem key={num} value={num}>{num}</MenuItem>)	
					}
				
				</Select>
				<Button
					variant="contained"
					color="secondary"
					onClick={clearCanvas}
				>
					Clear
				</Button>
				<Button
					color="secondary"
					variant="contained"
					onClick={saveImage}
				>
					save
				</Button>
			</Box>
			<Paper className="canvasContainer" ref={wrapperRef} elevation={5}>
				<canvas
					ref={subCanvasRef}
					width={800}
					height={600}
					className="canvas"
				></canvas>
				<canvas
					ref={canvasRef}
					className="canvas"
					width={800}
					height={600}
					onMouseDown={onMouseDown}
					onMouseMove={onMouseMove}
					onMouseUp={onMouseUp}
				></canvas>
			</Paper>
		</Box>
	)
}
