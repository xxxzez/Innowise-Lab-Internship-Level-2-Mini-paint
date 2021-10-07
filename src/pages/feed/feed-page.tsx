import { Box, Button, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Image } from '../../components/image/image'
import { fetchAllImages } from '../../core/firebase/images-api'
import { setImages } from '../../core/redux/images/images-actions'
import { Preloader } from '../../utils/preloader/preloader'
import { useStyles } from './feed-page.styles'

export const FeedPage: React.FC = React.memo(() => {
	const styles = useStyles()
	const [isLoading, setIsLoading] = useState(false)
	const [artist, setArtist] = useState<any>('All artists')
	const dispatch = useDispatch()
	const images = useSelector((state: any) => state.images.images)
	// const user = useSelector((state: any) => state.auth.user)
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

	useEffect(() => {
		setIsLoading(true)
		fetchAllImages().then((res) => dispatch(setImages(res.reverse())))
		setIsLoading(false)
	}, [dispatch])

	return (
		<Box>
			{isLoading ? (
				<Preloader />
			) : (
				<Box className={styles.feed}>
					<Box className={styles.buttons}>
						<Button
							variant="contained"
							color="secondary"
							className={styles.button}
						>
							<NavLink className={styles.link} to="/editor">
								Editor
							</NavLink>
						</Button>
						<Button
							variant="contained"
							color="secondary"
							className={styles.button}
						>
							<NavLink className={styles.link} to="/">
								Feed
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
