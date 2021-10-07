import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	feed: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttons: {
		marginBottom: '40px',
	},
	button: {
		textDecoration: 'none',
		marginLeft: '20px',
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
})
