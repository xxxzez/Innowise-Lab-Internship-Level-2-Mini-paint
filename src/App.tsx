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
import { FeedPage } from './pages/feed/feed-page'
import { EditorPage } from './pages/editor/editor-page'
import { RootStateType } from './core/types/common-types'
import { useStyles } from './app.styles'

function App() {
	const styles = useStyles()
	const [isLoading, setIsLoading] = useState(false)
	const user = useSelector((state: RootStateType) => state.auth.user)
	const dispatch = useDispatch()

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
		<Container>
			<Header />
			{isLoading ? (
				<Preloader />
			) : (
				<Container className={styles.main}>
					{user ? (
						<Switch>
							<Route exact path="/">
								<FeedPage />
							</Route>
							<Route exact path="/editor">
								<EditorPage />
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
