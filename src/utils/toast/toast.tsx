import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Box } from '@material-ui/core'
import { useStyles } from './toast.style'
import { ToastPropsType } from '../../core/types/common-types'
import { useState } from 'react'


export const Toast: React.FC<ToastPropsType> = ({
	message,
	setErrorMessage,
}) => {
	const styles = useStyles()
	const [open, setOpen] = useState<boolean>(true)

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		setErrorMessage!('')
		setOpen(false)
	}
	return (
		<Box className={styles.root}>
			<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
				<MuiAlert
					elevation={6}
					variant="filled"
					severity="error"
					onClose={handleClose}
				>
					{message}
				</MuiAlert>
			</Snackbar>
		</Box>
	)
}
