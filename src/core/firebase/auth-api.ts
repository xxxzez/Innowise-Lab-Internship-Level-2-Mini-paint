import { UserType } from './../types/user-types'
import { auth, db, signInWithGoogle } from './firebase'

export async function getAuthDataFromGoogleSignIn() {
	return await signInWithGoogle()
}
export async function getAuthDataFromEmailSignIn(
	email: string,
	password: string
) {
	return await auth.signInWithEmailAndPassword(email, password)
}
export async function getAuthDataFromEmailSignUp(
	email: string,
	password: string
) {
	return await auth.createUserWithEmailAndPassword(email, password)
}
export async function signOut() {
	return await auth.signOut()
}
export async function createNewUserInDB(user: UserType) {
	const newUserRef = db.collection('users').doc(`${user.uid}`)
	return await newUserRef.set({
		userId: user.uid,
		email: user.email,
		photo: user.photo,
	})
}
