import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	canvasContainer: {
		width: '800px',
		height: '600px',
	},
	canvas: {
		position: 'absolute',
	},
	buttons: {
		marginBottom: '40px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	btn: {
		marginRight: '15px',
	},
})
