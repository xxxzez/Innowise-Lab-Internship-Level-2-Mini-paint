import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { SignUpPageStylesPropsType, useStyles } from './sign-up-page.styles'
import { Toast } from '../../utils/toast/toast'
import { useDispatch, useSelector } from 'react-redux'
import {
	setErrorMessage,
	signUpWithEmailAndPassword,
} from '../../core/redux/auth/auth-actions'
import { ErrorType, RootStateType } from '../../core/types/common-types'

export const SignUpPage: React.FC = React.memo(() => {
	const styles: SignUpPageStylesPropsType = useStyles()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const error = useSelector((state: RootStateType) => state.auth.error)

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (password !== confirmPassword) {
			dispatch(setErrorMessage("Passwords don't match, try again!"))
			return
		}
		if (password.includes(' ')) {
			dispatch(setErrorMessage('Password must be without spaces!'))
			return
		}

		dispatch(signUpWithEmailAndPassword(email, password))
		setEmail('')
		setPassword('')
		setConfirmPassword('')
	}

	const onEmailChange = (
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setEmail(event.currentTarget.value)
	}
	const onPasswordChange = (
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setPassword(event.currentTarget.value)
	}
	const onConfirmedPasswordChange = (
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setConfirmPassword(event.currentTarget.value)
	}
	return (
		<Container className={styles.signUpBox}>
			{error ? <Toast /> : ''}
			<Typography variant="h5">
				Sign up with email and password
			</Typography>
			<form className={styles.form} onSubmit={handleSubmit}>
				<TextField
					variant="outlined"
					type="email"
					name="email"
					value={email}
					onChange={onEmailChange}
					label="Email"
					required
					className={styles.input}
				/>
				<TextField
					variant="outlined"
					type="password"
					name="password"
					value={password}
					onChange={onPasswordChange}
					label="Password"
					required
					className={styles.input}
				/>
				<TextField
					variant="outlined"
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={onConfirmedPasswordChange}
					label="Confirm Password"
					required
					className={styles.input}
				/>
				<Container className={styles.buttons}>
					<Link to="/signin" className={styles.link}>
						<Button variant="contained" color="secondary">
							Go back
						</Button>
					</Link>
					<Button color="secondary" variant="contained" type="submit">
						SIGN UP
					</Button>
				</Container>
			</form>
		</Container>
	)
})
