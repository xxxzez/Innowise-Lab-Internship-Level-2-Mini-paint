import { useEffect, useRef, useState } from 'react'
import './canvas.styles.css'

export const Canvas = (props) => {
	const canvasRef = useRef()
	// const [color, setColor] = useState('#000000')
	const [context, setContext] = useState()
	// const [instrumentName, setInstrumentName] = useState('')
	const [mouseDown, setMouseDown] = useState(false)

	useEffect(() => {
		if (canvasRef.current) {
			setContext(canvasRef.current.getContext('2d'))
		}
	}, [])

	const draw = (x, y) => {
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
		<div>
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
