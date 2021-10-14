import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#234',
	},
	info: {
		display: 'flex',
		alignItems: 'center',
	},
	avatar: {
		marginLeft: '20px',
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
