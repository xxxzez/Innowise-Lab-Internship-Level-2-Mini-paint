import { ClassNameMap, makeStyles } from '@material-ui/styles'

export type TaskStylesPropType = ClassNameMap<
	'root' | 'taskItem' | 'buttons' | 'paper' | 'task'
>

export const useStyles = makeStyles(() => ({
	paper: {
		zIndex: 1,
		position: 'relative',
	},
	taskItem: {
		margin: '25px',
		padding: '25px',
		minWidth: '300px',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
}))
