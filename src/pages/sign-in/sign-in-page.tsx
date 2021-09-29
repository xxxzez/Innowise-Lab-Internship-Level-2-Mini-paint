import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	createNewUserInDB,
	getAuthDataFromEmailSignIn,
	getAuthDataFromGoogleSignIn,
} from '../../core/firebase/auth-api'
import {  SignInPagePropsType } from '../../core/types/common-types'
import {
	Box,
	Button,
	Container,
	TextField,
	Typography,
} from '@material-ui/core'
import { useStyles } from './sign-in-page.styles'
import firebase from 'firebase'
import { Toast } from '../../utils/toast/toast'


export const SignInPage: React.FC<SignInPagePropsType> = React.memo(
	({ error, setCurrentUser, setErrorMessage }) => {
		const styles = useStyles()
		const [email, setEmail] = useState('')
		const [password, setPassword] = useState('')
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

		const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			try {
				const { user }: firebase.auth.UserCredential =
					await getAuthDataFromEmailSignIn(email, password)
				const currentUser = {
					uid: user!.uid,
					email: user!.email,
					photo: user!.photoURL,
				}
				setCurrentUser(currentUser)
			} catch (error: any) {
				setErrorMessage(error.message)
			}
			setEmail('')
			setPassword('')
		}

		const onSignInWithGoogle = async () => {
			try {
				const { user }: firebase.auth.UserCredential = await getAuthDataFromGoogleSignIn()
				const currentUser = {
					uid: user!.uid,
					email: user!.email,
					photo: user!.photoURL,
				}
				await createNewUserInDB(currentUser)
				setCurrentUser(currentUser)
			} catch (error: any) {
				setErrorMessage(error.message)
			}
		}
		return (
			<Container className={styles.signinBox}>
				{error ? (
				<Toast message={error} setErrorMessage={setErrorMessage} />
			) : (
				''
			)}
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
)
