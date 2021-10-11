import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Box } from '@material-ui/core'
import { useStyles } from './toast.style'
import { RootStateType } from '../../core/types/common-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMessage } from '../../core/redux/auth/auth-actions'

export const Toast: React.FC = () => {
	const message = useSelector((state: RootStateType) => state.auth.error)
	const dispatch = useDispatch()
	const styles = useStyles()
	const [open, setOpen] = useState<boolean>(true)

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		dispatch(setErrorMessage(''))
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
