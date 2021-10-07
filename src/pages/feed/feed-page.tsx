import { Box, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from '../../components/image/image'
import { fetchAllImages } from '../../core/firebase/images-api'
import { Preloader } from '../../utils/preloader/preloader'
import { useStyles } from './feed-page.styles'

export const FeedPage: React.FC = React.memo(() => {
	const styles = useStyles()
	const [images, setImages] = useState<any>()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetchAllImages().then((res) => setImages(res.reverse()))
		setIsLoading(false)
	}, [])

	console.log(images)
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
					</Box>
					<Box>
						{images && images.length > 0 ? (
							images.map((image: any) => (
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
