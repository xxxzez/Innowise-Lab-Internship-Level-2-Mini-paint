import { Container, IconButton, Paper, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db, storage } from '../../core/firebase/firebase'
import { setErrorMessage } from '../../core/redux/auth/auth-actions'
import { Toast } from '../../utils/toast/toast'
import { useStyles } from './image.styles'

export const Image: React.FC<any> = React.memo(({ image }) => {
	const styles = useStyles()
	const user = useSelector((state: any) => state.auth.user)
	const error = useSelector((state: any) => state.auth.error)
	const dispatch = useDispatch()

	const deleteImage = async () => {
		if (user.email === image.userEmail) {
			await storage.ref().child(image.imagePath).delete()
			await db.collection('images').doc(`${image.imageId}`).delete()
		} else {
			dispatch(
				setErrorMessage(
					'You are not allowed to delete the picture that is now yours'
				)
			)
		}
	}
	return (
		<Paper elevation={4} className={styles.paper}>
			{error ? <Toast /> : ''}
			<Container className={styles.taskItem}>
				<Container className={styles.buttons}>
					<IconButton onClick={deleteImage}>
						<DeleteIcon />
					</IconButton>
				</Container>
				<Container>
					<Typography variant="h6">{image.userEmail}</Typography>
				</Container>
				<img src={image.imageURL} alt="" />
			</Container>
		</Paper>
	)
})
