import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	editor: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		textDecoration: 'none',
		marginLeft: '20px',
		marginBottom: '40px',
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
})
