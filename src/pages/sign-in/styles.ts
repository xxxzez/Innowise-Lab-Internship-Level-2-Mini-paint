import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	signinBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		marginTop: '25px',
	},
	button: {
		marginTop: '20px',
	},
	span: {
		marginTop: '80px',
		marginBottom: '20px',
	},
	link: {
		textDecoration: 'none',
	},
})
