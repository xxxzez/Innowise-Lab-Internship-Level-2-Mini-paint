import { Box, Button, MenuItem, Paper, Select } from '@material-ui/core'
import  {  MouseEvent, useEffect, useRef, useState } from 'react'
import BrushIcon from '@material-ui/icons/Brush'
import './styles.ts'
import CropLandscapeOutlined from '@material-ui/icons/CropLandscape'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RemoveIcon from '@material-ui/icons/Remove'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { createImageInstanceInDB } from '@core/redux/images/images-actions'
import { storage } from '@core/firebase/firebase'
import { MouseDownType, RootStateType } from '@core/types/common-types'
import { useStyles } from './styles'

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
	const styles = useStyles()
	
	useEffect(() => {
		if (canvasRef.current && subCanvasRef.current) {
			setContext(canvasRef.current.getContext('2d'))
			setSubContext(subCanvasRef.current.getContext('2d'))
		}
	}, [])

	const clearContext = (context: any, canvasRef: any) => {
		context!.clearRect(
			0,
			0,
			canvasRef.current!.width,
			canvasRef.current!.height
		)
	}

	const clearCanvas = () => {
		clearContext(context, canvasRef)
		clearContext(subContext, subCanvasRef)
	
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
			const onMouseMovePencil = () => {
				context.lineTo(
					e.pageX - target.offsetLeft,
					e.pageY - target.offsetTop
				)
				context.stroke()
			}
			const onMouseMoveRectangle = () => {
				let width =
						e.pageX - mouseDownX - wrapperRef.current!.offsetLeft
					let height =
						e.pageY - mouseDownY - wrapperRef.current!.offsetTop
					context.strokeRect(mouseDownX, mouseDownY, width, height)
					context.stroke()
			}
			const onMouseMoveCircle = () => {
				context.beginPath()
					context.arc(
						mouseDownX,
						mouseDownY,
						Math.sqrt(
							(e.pageX -
								mouseDownX -
								wrapperRef.current!.offsetLeft) **
								2 +
								(e.pageY -
									mouseDownY -
									wrapperRef.current!.offsetTop) **
									2
						),
						0,
						Math.PI * 2,
						false
					)
					context.stroke()
			}
			const onMouseMoveLine = () => {
				context.beginPath()
				context.moveTo(mouseDownX, mouseDownY)
				context.lineTo(
					e.pageX - wrapperRef.current!.offsetLeft,
					e.pageY - wrapperRef.current!.offsetTop
				)
				context.stroke()
			}

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
			clearContext(context, canvasRef)

			switch (tool) {
				case 'pencil':
					onMouseMovePencil()
					break
				case 'rectangle':
					onMouseMoveRectangle()
					break
				case 'circle':
					onMouseMoveCircle()
					break
				case 'line':
					onMouseMoveLine()
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

	const handleDash = () => setDash( dash === false ? true : false)
	const handleBlur = () => setBlur( blur === 0 ? 10 : 0)
	
	const amountOfWidthOption = Array.from(Array(101).keys()).splice(1)

	return (
		<Box className="canvas-box">
			<Box className={styles.buttons}>
				<Button
					className={styles.btn}
					variant="contained"
					color={tool === 'pencil' ? 'primary' : 'inherit'}
					onClick={() => setTool('pencil')}
				>
					<BrushIcon />
				</Button>
				<Button
					className={styles.btn}
					variant="contained"
					color={tool === 'rectangle' ? 'primary' : 'inherit'}
					onClick={() => setTool('rectangle')}
				>
					<CropLandscapeOutlined />
				</Button>
				<Button
					className={styles.btn}
					color={tool === 'circle' ? 'primary' : 'inherit'}
					variant="contained"
					onClick={() => setTool('circle')}
				>
					<RadioButtonUncheckedIcon />
				</Button>
				<Button
					className={styles.btn}
					color={tool === 'line' ? 'primary' : 'inherit'}
					variant="contained"
					onClick={() => setTool('line')}
				>
					<RemoveIcon />
				</Button>
				<Button
					className={styles.btn}
					color={dash === true ? 'primary' : 'inherit'}
					variant="contained"
					onClick={handleDash}
				>
					Dash
				</Button>
				<Button
					className={styles.btn}
					color={blur > 0 ? 'primary' : 'inherit'}
					variant="contained"
					onClick={handleBlur}
				>
					Blur
				</Button>
				<input
					className={styles.btn}
					type="color"
					value={color}
					onChange={(event) => setColor(event.target.value)}
				/>
				<Select
					className={styles.btn}
					value={lineWidth}
					onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
					 setLineWidth(e.target.value as number)}
				>
					{
					amountOfWidthOption.map(num => <MenuItem key={num} value={num}>{num}</MenuItem>)	
					}
				</Select>
				<Button
					className={styles.btn}
					variant="contained"
					color="secondary"
					onClick={clearCanvas}
				>
					Clear
				</Button>
				<Button
					className={styles.btn}
					color="secondary"
					variant="contained"
					onClick={saveImage}
				>
					save
				</Button>
			</Box>
			<Paper className={styles.canvasContainer} ref={wrapperRef} elevation={5}>
				<canvas
					ref={subCanvasRef}
					width={800}
					height={600}
					className={styles.canvas}
				></canvas>
				<canvas
					ref={canvasRef}
					className={styles.canvas}
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