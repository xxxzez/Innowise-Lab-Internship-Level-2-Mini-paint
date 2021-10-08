import { UserType } from '../types/user-types'
import { db, storage } from './firebase'

export async function fetchAllImages() {
	const imagesRef = db.collection('images')
	return await imagesRef.get()
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

export async function deleteImageInStorage(imagePath: any) {
	return await storage.ref().child(imagePath).delete()
}

export async function deleteImageInDatabase(imageId: any) {
	return await db.collection('images').doc(`${imageId}`).delete()
}

export async function loadImageToStorage(imagePath: string, imageURL: string) {
	return await storage.ref().child(imagePath).putString(imageURL, 'data_url')
}

export async function getNewImageURL(userId: string, date: number) {
	return await storage.ref(`images/${userId}/${date}.png`).getDownloadURL()
}
