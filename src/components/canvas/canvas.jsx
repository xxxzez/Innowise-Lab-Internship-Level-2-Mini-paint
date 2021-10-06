import { Box, Button, MenuItem, Paper, Select } from '@material-ui/core'
import { useEffect, useRef, useState } from 'react'
import BrushIcon from '@material-ui/icons/Brush'
import './canvas.styles.css'
import CropLandscapeOutlined from '@material-ui/icons/CropLandscape'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RemoveIcon from '@material-ui/icons/Remove'

export const Canvas = () => {
	const canvasRef = useRef()
	const subCanvasRef = useRef()
	const wrapperRef = useRef()
	const [color, setColor] = useState('#743DF5')
	const [lineWidth, setLineWidth] = useState(1)
	const [mouseDownX, setMouseDownX] = useState()
	const [mouseDownY, setMouseDownY] = useState()
	const [context, setContext] = useState()
	const [subContext, setSubContext] = useState()
	const [tool, setTool] = useState('pencil')

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
	const handleChangeThickness = (e) => {
		setLineWidth(e.target.value)
	}

	const onMouseDown = (e) => {
		setMouseDownX(e.pageX - e.target.offsetLeft)
		setMouseDownY(e.pageY - e.target.offsetTop)
	}

	const onMouseMove = (e) => {
		if (
			context &&
			mouseDownX &&
			mouseDownY &&
			wrapperRef.current &&
			canvasRef.current
		) {
			context.strokeStyle = color
			context.lineWidth = lineWidth
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
						e.clientX - wrapperRef.current.offsetLeft,
						e.clientY - wrapperRef.current.offsetTop
					)
					context.stroke()
					break
				default:
					break
			}
		}
	}
	const onMouseUp = (e) => {
		if (context && subContext) {
			subContext.drawImage(canvasRef.current, 0, 0)
			context.beginPath()
			setMouseDownX(null)
			setMouseDownY(null)
		}
	}
	return (
		<Box className="canvas-box">
			<Box className="buttons">
				<Button variant="outlined" onClick={() => setTool('pencil')}>
					<BrushIcon />
				</Button>
				<Button variant="outlined" onClick={() => setTool('rectangle')}>
					<CropLandscapeOutlined />
				</Button>
				<Button variant="outlined" onClick={() => setTool('circle')}>
					<RadioButtonUncheckedIcon />
				</Button>
				<Button variant="outlined" onClick={() => setTool('line')}>
					<RemoveIcon />
				</Button>

				{/* <ColorPicker
					defaultValue={color}
					onChange={(event) => setColor(event.target.value)}
					// hideTextfield
				/> */}
				{/* <ColorPalette
					name="color"
					defaultValue="#000"
					// value={this.state.color} - for controlled component
					onChange={(color) => console.log(color)}
				/> */}
				<input
					type="color"
					value={color}
					onChange={(event) => setColor(event.target.value)}
				/>
				<Select
					// name="Thickness"
					// label="thickness"
					className="select"
					value={lineWidth}
					onChange={handleChangeThickness}
				>
					<MenuItem value="1">1</MenuItem>
					<MenuItem value="2">2</MenuItem>
					<MenuItem value="4">4</MenuItem>
					<MenuItem value="6">6</MenuItem>
					<MenuItem value="8">8</MenuItem>
					<MenuItem value="10">10</MenuItem>
					<MenuItem value="12">12</MenuItem>
					<MenuItem value="14">14</MenuItem>
					<MenuItem value="16">16</MenuItem>
					<MenuItem value="20">20</MenuItem>
				</Select>
				<Button variant="outlined" onClick={clearCanvas}>
					Clear
				</Button>
				<Button variant="outlined">save</Button>
			</Box>
			<Paper className="canvasContainer" ref={wrapperRef} elevation={5}>
				<canvas
					ref={subCanvasRef}
					width={600}
					height={600}
					className="canvas"
				></canvas>
				<canvas
					ref={canvasRef}
					className="canvas"
					width={600}
					height={600}
					onMouseDown={onMouseDown}
					onMouseMove={onMouseMove}
					onMouseUp={onMouseUp}
				></canvas>
			</Paper>
		</Box>
	)
}