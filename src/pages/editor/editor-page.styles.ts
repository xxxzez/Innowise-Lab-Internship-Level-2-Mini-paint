import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	editor: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttons: {
		alignSelf: 'start',
		marginBottom: '40px',
	},
	button: {
		textDecoration: 'none',
		marginLeft: '20px',
	},
	link: {
		textDecoration: 'none',
	},
})
