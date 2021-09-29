import { AuthActionTypes } from './auth-types'

export const setCurrentUser = (user: any) => ({
	type: AuthActionTypes.SET_CURRENT_USER,
	payload: user,
})
export const signInWithEmail = (email: string, password: string) => ({
	type: AuthActionTypes.SIGN_IN_WITH_EMAIL,
	email,
	password,
})

export const signUpWithEmailAndPassword = (
	email: string,
	password: string
) => ({
	type: AuthActionTypes.SIGN_UP_WITH_EMAIL_AND_PASSWORD,
	email,
	password,
})

export const signInWithGoogle = () => ({
	type: AuthActionTypes.SIGN_IN_WITH_GOOGLE,
})

export const signOut = () => ({
	type: AuthActionTypes.SIGN_OUT,
})
export const setErrorMessage = (errorMessage: any) => ({
	type: AuthActionTypes.SET_ERROR_MESSAGE,
	errorMessage,
})
