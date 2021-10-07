import { Box, Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from '../../components/image/image'
import { useStyles } from './feed-page.styles'

export const FeedPage: React.FC = React.memo(() => {
	const styles = useStyles()

	return (
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
				Users images
				<Image />
			</Box>
		</Box>
	)
})
