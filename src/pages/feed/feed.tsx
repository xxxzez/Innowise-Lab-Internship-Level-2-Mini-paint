import { Box } from '@material-ui/core'
import React from 'react'
import { Image } from '../../components/image/image'
import { useStyles } from './feed.styles'

export const FeedPage: React.FC = React.memo(() => {
	const styles = useStyles()

	return (
		<Box className={styles.feed}>
			Users images
			<Image />
		</Box>
	)
})
