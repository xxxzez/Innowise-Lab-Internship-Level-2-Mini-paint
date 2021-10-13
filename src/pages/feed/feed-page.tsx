import { Box, Button, MenuItem, Select } from '@material-ui/core'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Image } from '../../components/image/image'
import { fetchImages } from '../../core/redux/images/images-actions'
import { ImageType, RootStateType } from '../../core/types/common-types'
import { Preloader } from '../../utils/preloader/preloader'
import { Toast } from '../../utils/toast/toast'
import { useStyles } from './feed-page.styles'

export const FeedPage: FC = () => {
	const styles = useStyles()
	const [isLoading, setIsLoading] = useState(false)
	const [artist, setArtist] = useState<string>('All artists')
	const images = useSelector((state: RootStateType) => state.images.images)
	const error = useSelector((state: RootStateType) => state.auth.error)
	const dispatch = useDispatch()
	const usersArray: string[] = ['All artists']

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchImages())
		setIsLoading(false)
	}, [dispatch])

	images.forEach((image: ImageType) => {
		if (!usersArray.includes(image.userEmail)) {
			usersArray.push(image.userEmail)
		}
	})
	const filteredImages =
		artist === 'All artists'
			? images
			: images.filter((image: ImageType) => image.userEmail === artist)

	return (
		<Box>
			{isLoading ? (
				<Preloader />
			) : (
				<Box className={styles.feed}>
					{error && <Toast />}
					<Box className={styles.buttons}>
						<Button
							variant="outlined"
							color="primary"
							className={styles.button}
						>
							<NavLink className={styles.link} to="/">
								Feed
							</NavLink>
						</Button>
						<Button
							variant="outlined"
							color="primary"
							className={styles.button}
						>
							<NavLink className={styles.link} to="/editor">
								Editor
							</NavLink>
						</Button>
						<Select
							className={styles.select}
							value={artist}
							onChange={(
								e: ChangeEvent<{ value: unknown }>
							) => setArtist(e.target.value as string)}
						>
							{usersArray.map((user: string) => (
								<MenuItem key={user} value={user}>
									{user}
								</MenuItem>
							))}
						</Select>
					</Box>
					<Box>
						{images && images.length > 0 ? (
							filteredImages.map((image: ImageType) => (
								<Image image={image} key={image.imageId} />
							))
						) : (
							<h1>No images</h1>
						)}
					</Box>
				</Box>
			)}
		</Box>
	)
}