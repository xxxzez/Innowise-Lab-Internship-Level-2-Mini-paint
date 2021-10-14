import {
	AppBar,
	Avatar,
	Box,
	Button,
	Toolbar,
	Typography,
} from '@material-ui/core'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../core/redux/auth/auth-actions'
import { RootStateType } from '../../core/types/common-types'
import { useStyles } from './styles'

export const Header: FC = () => {
	const styles = useStyles()
	const user = useSelector((state: RootStateType) => state.auth.user)
	const dispatch = useDispatch()
	const onSignOut = () => dispatch(signOut())

	return (
		<AppBar position="static">
			<Toolbar className={styles.header}>
				<Typography variant="h5">Paint</Typography>

				{user && (
					<Box className={styles.info}>
						<Typography variant="body2">{user.email}</Typography>
						<Avatar
							alt={'User profile photo'}
							src={user.photo ? user.photo : ''}
							className={styles.avatar}
						/>

						<Button
							variant="contained"
							color="secondary"
							className={styles.button}
							onClick={onSignOut}
						>
							Sign out
						</Button>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	)
}
