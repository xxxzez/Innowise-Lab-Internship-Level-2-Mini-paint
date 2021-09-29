import './App.css'
import { SignInPage } from './pages/sign-in/sign-in-page'
import { useEffect, useState } from 'react'
import { Header } from './components/header/header'
import { Redirect, Route, Switch } from 'react-router'
import { SignUpPage } from './pages/sign-up/sign-up-page'
import { Container } from '@material-ui/core'
import { auth } from './core/firebase/firebase'
import { Preloader } from './utils/preloader/preloader'

function App() {
	const [error, setError] = useState<any>(null)
	const [user, setUser] = useState<any>(null)
	const [isLoading, setIsLoading] = useState(false)

	const setCurrentUser: any = (user: any) => {
		setUser(user)
	}
	const setErrorMessage: any = (error: any) => {
		setError(error)
	}
	useEffect(() => {
		setIsLoading(true)
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email,
					photo: user.photoURL,
				})
				setIsLoading(false)
			} else {
				setUser(null)
				setIsLoading(false)
			}
		})
	}, [])
	return (
		<Container className="App">
			<Header
				user={user}
				setCurrentUser={setCurrentUser}
				setErrorMessage={setErrorMessage}
			/>
			{isLoading ? (
				<Preloader />
			) : (
				<Container className="main">
					{user === null ? (
						<Switch>
							<Route exact path="/signup">
								<SignUpPage
									error={error}
									setCurrentUser={setCurrentUser}
									setErrorMessage={setErrorMessage}
								/>
							</Route>
							<Route exact path="/signin">
								<SignInPage
									error={error}
									setCurrentUser={setCurrentUser}
									setErrorMessage={setErrorMessage}
								/>
							</Route>
							<Route path="*">
								<Redirect to="/signin" />
							</Route>
						</Switch>
					) : (
						<Redirect to="/" />
					)}
				</Container>
			)}
		</Container>
	)
}

export default App
