import './App.css'
import { SignInPage } from './pages/sign-in/sign-in-page'
import { useEffect, useState } from 'react'
import { Header } from './components/header/header'
import { Redirect, Route, Switch } from 'react-router'
import { SignUpPage } from './pages/sign-up/sign-up-page'
import { Container } from '@material-ui/core'
import { auth } from './core/firebase/firebase'
import { Preloader } from './utils/preloader/preloader'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './core/redux/auth/auth-actions'
import { Canvas } from './components/canvas/canvas'
import { FeedPage } from './pages/feed/feed'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()
	const user = useSelector((state: any) => state.auth.user)

	useEffect(() => {
		setIsLoading(true)
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch(
					setCurrentUser({
						uid: user.uid,
						email: user.email,
						photo: user.photoURL,
					})
				)
				setIsLoading(false)
			} else {
				dispatch(setCurrentUser(null))
				setIsLoading(false)
			}
		})
	}, [dispatch])

	return (
		<Container className="App">
			<Header />
			{isLoading ? (
				<Preloader />
			) : (
				<Container className="main">
					{user ? (
						<Switch>
							<Route exact path="/">
								<FeedPage />
							</Route>
							<Route exact path="/editor">
								<Canvas />
							</Route>
						</Switch>
					) : (
						<Redirect to="/signin" />
					)}
					{user === null ? (
						<Switch>
							<Route exact path="/signup">
								<SignUpPage />
							</Route>
							<Route exact path="/signin">
								<SignInPage />
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
