import { Box, Button, MenuItem, Paper, Select } from '@material-ui/core'
import {  useEffect, useRef, useState } from 'react'
import BrushIcon from '@material-ui/icons/Brush'
import './canvas.styles.css'
import CropLandscapeOutlined from '@material-ui/icons/CropLandscape'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RemoveIcon from '@material-ui/icons/Remove'
import { storage } from '../../core/firebase/firebase'
import { useSelector } from 'react-redux'
import { createNewImageReferenceInDB } from '../../core/firebase/images-api'
import { useHistory } from 'react-router'

export const Canvas = () => {
	const canvasRef = useRef<any>()
	const subCanvasRef = useRef<any>()
	const wrapperRef = useRef<any>()
	const [color, setColor] = useState('#743DF5')
	const [dash, setDash] = useState(false)
	const [blur, setBlur] = useState(0)
	const [lineWidth, setLineWidth] = useState<any>(2)
	const [mouseDownX, setMouseDownX] = useState<any>()
	const [mouseDownY, setMouseDownY] = useState<any>()
	const [context, setContext] =	useState<any>()
	const [subContext, setSubContext] = useState<any>()
	const [tool, setTool] = useState('pencil')
	const user = useSelector((state: any) => state.auth.user)
	const history = useHistory()
	useEffect(() => {
		if (canvasRef.current && subCanvasRef.current) {
			setContext(canvasRef.current.getContext('2d'))
			setSubContext(subCanvasRef.current.getContext('2d'))
		}
	}, [])

	const clearCanvas = () => {
		context.clearRect(
			0,
			0,
			canvasRef.current.width,
			canvasRef.current.height
		)
		subContext.clearRect(
			0,
			0,
			subCanvasRef.current.width,
			subCanvasRef.current.height
		)
	}

	const onMouseDown = (e: any) => {
		setMouseDownX(e.pageX - e.target.offsetLeft)
		setMouseDownY(e.pageY - e.target.offsetTop)
	}

	const onMouseMove = (e: any) => {
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
						e.pageX - e.target.offsetLeft,
						e.pageY - e.target.offsetTop
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

	const onMouseUp = (e: any) => {
		if (context && subContext) {
			subContext.drawImage(canvasRef.current, 0, 0)
			context.beginPath()
			setMouseDownX(null)
			setMouseDownY(null)
		}
	}

	const saveImage = async () => {
		const imageURL = subContext!.canvas?.toDataURL()
		const date = Date.now()
		const imagePath = `images/${user.uid}/${date}.png`
		await storage.ref().child(imagePath).putString(imageURL, 'data_url')
		const imageDatabaseURL = await storage
			.ref(`images/${user.uid}/${date}.png`)
			.getDownloadURL()
		createNewImageReferenceInDB(user, imageDatabaseURL, date, imagePath)
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
					onChange={(e: any) => setLineWidth(e.target.value)}
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
