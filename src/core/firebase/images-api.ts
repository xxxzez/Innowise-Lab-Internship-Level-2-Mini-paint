import { UserType } from '../types/user-types'
import { db } from './firebase'

export async function fetchAllImages() {
	const imagesRef = db.collection('images')
	const imagesArray: any = []
	await imagesRef
		.get()
		.then((querySnapshot) =>
			querySnapshot.forEach((doc) => imagesArray.push(doc.data()))
		)
	return imagesArray
}

export async function createNewImageReferenceInDB(
	user: UserType,
	imageURL: any,
	imageId: any,
	imagePath: any
) {
	const newImageRef = db.collection('images').doc(`${imageId}`)
	return await newImageRef.set({
		userEmail: user.email,
		imageURL,
		imageId,
		imagePath,
	})
}
