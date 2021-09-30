export class Tool {
	constructor(canvas) {
		this.canvas = canvas
		this.ctx = canvas.getContext('2d')
		this.destroyEvents()
	}
	destroyEvents() {
		this.canvas.onmousemove = null
		this.onmousedown = null
		this.onmouseup = null
	}
}

export class Brush extends Tool {
	listen() {
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
		this.onmousedown = this.mouseDownHandler.bind(this)
		this.onmouseup = this.mouseUpHandler.bind(this)
	}
	mouseUpHandler(e) {
		this.mouseDown = false
	}
	mouseDownHandler(e) {
		this.mouseDown = true
		this.ctx.beginPath()
		this.ctx.moveTo(
			e.pageX - e.target.offsetLeft,
			e.pageY - e.target.offsetTop
		)
	}
	mouseMoveHandler(e) {
		if (this.mouseDown) {
			this.draw(
				e.pageX - e.target.offsetLeft,
				e.pageY - e.target.offsetTop
			)
		}
	}
	draw(x, y) {
		this.ctx.lineTo(x, y)
		this.ctx.stroke()
	}
}
