import { useEffect, useRef, useState } from 'react'
import './canvas.styles.css'

export const Canvas = () => {
	const canvasRef = useRef()
	const [color, setColor] = useState('#fff000')
	const [lineWidth, setLineWidth] = useState(2)
	const [context, setContext] = useState()
	const [instrument, setInstrument] = useState('')
	const [mouseDown, setMouseDown] = useState(false)

	useEffect(() => {
		if (canvasRef.current) {
			setContext(canvasRef.current.getContext('2d'))
		}
	}, [])

	const draw = (x, y) => {
		context.strokeStyle = color
		context.lineWidth = lineWidth
		context.lineTo(x, y)
		context.stroke()
	}

	const onMouseDown = (e) => {
		setMouseDown(true)
		context.beginPath()
		context.moveTo(
			e.pageX - e.target.offsetLeft,
			e.pageY - e.target.offsetTop
		)
	}

	const onMouseMove = (e) => {
		if (mouseDown) {
			draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
		}
	}
	const onMouseUp = (e) => {
		setMouseDown(false)
	}

	return (
		<div className="canvasContainer">
			<div className="buttons">
				<button onClick={() => setInstrument('Brush')}>Brush</button>
				<button>Rectangle</button>
				<button>Circle</button>
				<button>Line</button>
				<input
					type="color"
					value={color}
					onChange={(event) => setColor(event.target.value)}
				/>
				<select name="Thickness" id="">
					<option value={() => setLineWidth(1)}>1</option>
					<option value={() => setLineWidth(2)}>2</option>
					<option value={() => setLineWidth(4)}>4</option>
					<option value={() => setLineWidth(8)}>8</option>
					<option value={() => setLineWidth(16)}>16</option>
				</select>

				<button>undo</button>
				<button>save</button>
			</div>
			<canvas
				ref={canvasRef}
				onMouseDown={onMouseDown}
				onMouseMove={onMouseMove}
				onMouseUp={onMouseUp}
				width="600"
				height="400"
			></canvas>
		</div>
	)
}
