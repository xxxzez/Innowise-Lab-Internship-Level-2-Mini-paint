import {
	AppBar,
	Avatar,
	Box,
	Button,
	Toolbar,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { signOut } from '../../core/firebase/auth-api'
import { HeaderPropsType } from '../../core/types/common-types'
import { useStyles } from './header.styles'

export const Header: React.FC<HeaderPropsType> = React.memo(
	({ user, setCurrentUser, setErrorMessage }) => {
		const styles = useStyles()

		const onSignOut = async () => {
			try {
				await signOut()
				setCurrentUser(null)
			} catch (error: any) {
				setErrorMessage(error.message)
			}
		}
		return (
			<AppBar position="static">
				<Toolbar className={styles.header}>
					<Typography variant="h5">Paint</Typography>
					<Box>
						{user ? (
							<Box className={styles.info}>
								<Typography variant="body2">
									{user.email}
								</Typography>
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
					</Box>
				</Toolbar>
			</AppBar>
		)
	}
)
