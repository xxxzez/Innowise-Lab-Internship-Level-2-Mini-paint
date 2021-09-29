import { makeStyles } from '@material-ui/core'
import { ClassNameMap } from '@material-ui/styles'

export type SignUpPageStylesPropsType = ClassNameMap<
	'signUpBox' | 'form' | 'input' | 'buttons' | 'link'
>

export const useStyles = makeStyles({
	signUpBox: {
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
		marginTop: '20px',
	},
	buttons: {
		marginTop: '20px',
		width: '250px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	link: {
		textDecoration: 'none',
	},
})
