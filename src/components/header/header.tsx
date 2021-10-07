import {
	AppBar,
	Avatar,
	Box,
	Button,
	Toolbar,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../core/redux/auth/auth-actions'
import { HeaderPropsType } from '../../core/types/common-types'
import { useStyles } from './header.styles'

export const Header: React.FC<HeaderPropsType> = React.memo(() => {
	const styles = useStyles()
	const user = useSelector((state: any) => state.auth.user)
	const dispatch = useDispatch()
	const onSignOut = () => {
		dispatch(signOut())
	}
	return (
		<AppBar position="static">
			<Toolbar className={styles.header}>
				<Typography variant="h5">Paint</Typography>

				{user ? (
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
				) : (
					''
				)}
			</Toolbar>
		</AppBar>
	)
})
 