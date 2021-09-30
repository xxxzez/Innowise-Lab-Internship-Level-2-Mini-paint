import { Container, IconButton, Paper, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { useStyles } from './image.styles'

export const Image = React.memo(() => {
	const styles = useStyles()

	return (
		<Paper elevation={4} className={styles.paper}>
			<Container className={styles.taskItem}>
				<Container className={styles.buttons}>
					<IconButton onClick={() => console.log('Delete image')}>
						<DeleteIcon />
					</IconButton>
				</Container>
				<Container>
					<Typography variant="h4">Image description</Typography>
				</Container>
			</Container>
		</Paper>
	)
})
