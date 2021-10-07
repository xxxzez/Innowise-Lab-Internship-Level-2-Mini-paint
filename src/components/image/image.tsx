import { Container, IconButton, Paper, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { db, storage } from '../../core/firebase/firebase'
import { useStyles } from './image.styles'

export const Image: React.FC<any> = React.memo(({ image }) => {
	const styles = useStyles()

	const deleteImage = async () => {
		await storage.ref().child(image.imagePath).delete()
		await db.collection('images').doc(`${image.imageId}`).delete()
	}
	return (
		<Paper elevation={4} className={styles.paper}>
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
