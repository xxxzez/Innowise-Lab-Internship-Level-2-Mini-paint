import { Container, IconButton, Paper, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMessage } from '@core/redux/auth/auth-actions'
import { deleteImage } from '@core/redux/images/images-actions'
import { ImageType, RootStateType } from '@core/types/common-types'
import { Toast } from '@utils/toast'
import { useStyles } from './styles'

type ImagePropsType = {
	image: ImageType,
}

export const Image: FC<ImagePropsType> = memo(({ image }) => {
	const styles = useStyles()
	const user = useSelector((state: RootStateType) => state.auth.user)
	const error = useSelector((state: RootStateType) => state.auth.error)
	const dispatch = useDispatch()

	const handleDeleteImage = async () => {
		if (
			user!.email === 'matvei.bohush@innowise-group.com' ||
			user!.email === image.userEmail
		) {
			dispatch(deleteImage(image.imagePath, image.imageId))
		} else {
			dispatch(
				setErrorMessage(
					'You are not allowed to delete the picture that is not yours'
				)
			)
		}
	}
	return (
		<Paper elevation={4} className={styles.paper}>
			{error && <Toast />}
			<Container className={styles.taskItem}>
				<Container className={styles.buttons}>
					<IconButton onClick={handleDeleteImage}>
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
