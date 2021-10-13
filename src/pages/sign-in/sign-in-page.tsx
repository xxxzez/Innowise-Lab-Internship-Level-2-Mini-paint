import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	Box,
	Button,
	Container,
	TextField,
	Typography,
} from '@material-ui/core'
import { useStyles } from './sign-in-page.styles'
import { Toast } from '../../utils/toast/toast'
import { useDispatch, useSelector } from 'react-redux'
import {
	signInWithGoogle,
	signInWithEmail,
} from '../../core/redux/auth/auth-actions'
import { RootStateType } from '../../core/types/common-types'

export const SignInPage: FC = () => {
	const styles = useStyles()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const error = useSelector((state: RootStateType) => state.auth.error)
	const dispatch = useDispatch()

	const onEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
		setEmail(event.currentTarget.value)

	const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
		setPassword(event.currentTarget.value)

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		dispatch(signInWithEmail(email, password))
		setEmail('')
		setPassword('')
	}

	const onSignInWithGoogle = () => dispatch(signInWithGoogle())

	return (
		<Container className={styles.signinBox}>
			{error && <Toast />}
			<Typography variant="h5">
				Sign in with email and password
			</Typography>
			<form onSubmit={handleSubmit} className={styles.form}>
				<TextField
					value={email}
					onChange={onEmailChange}
					required
					type="email"
					variant="outlined"
					label="Email"
					className={styles.input}
				/>
				<TextField
					value={password}
					onChange={onPasswordChange}
					required
					type="password"
					variant="outlined"
					label="Password"
					className={styles.input}
				/>
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					className={styles.button}
				>
					Sign in
				</Button>
				<Button
					onClick={onSignInWithGoogle}
					variant="contained"
					color="primary"
					className={styles.button}
				>
					Sign in with Google
				</Button>
			</form>
			<Typography className={styles.span}>
				I don't have an account
			</Typography>
			<Box>
				<Link to="/signup" className={styles.link}>
					<Button variant="contained" color="secondary">
						Sign up
					</Button>
				</Link>
			</Box>
		</Container>
	)
}
