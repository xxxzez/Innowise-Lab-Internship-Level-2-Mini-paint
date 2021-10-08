import { Box, Button, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Image } from '../../components/image/image'
import { fetchImages } from '../../core/redux/images/images-actions'
import { Preloader } from '../../utils/preloader/preloader'
import { Toast } from '../../utils/toast/toast'
import { useStyles } from './feed-page.styles'

export const FeedPage: React.FC = React.memo(() => {
	const styles = useStyles()
	const [isLoading, setIsLoading] = useState(false)
	const [artist, setArtist] = useState<any>('All artists')
	const dispatch = useDispatch()
	const images = useSelector((state: any) => state.images.images)
	const error = useSelector((state: any) => state.auth.error)

	useEffect(() => {
		setIsLoading(true)
		dispatch(fetchImages())
		setIsLoading(false)
	}, [dispatch])

	const usersArray: any = ['All artists']
	images.forEach((image: any) => {
		if (!usersArray.includes(image.userEmail)) {
			usersArray.push(image.userEmail)
		}
	})
	const filteredImages =
		artist === 'All artists'
			? images
			: images.filter((image: any) => image.userEmail === artist)

	return (
		<Box>
			{isLoading ? (
				<Preloader />
			) : (
				<Box className={styles.feed}>
					{error ? <Toast /> : ''}
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
							onChange={(e: any) => setArtist(e.target.value)}
						>
							{usersArray.map((user: any) => (
								<MenuItem key={user} value={user}>
									{user}
								</MenuItem>
							))}
						</Select>
					</Box>
					<Box>
						{images && images.length > 0 ? (
							filteredImages.map((image: any) => (
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
})
