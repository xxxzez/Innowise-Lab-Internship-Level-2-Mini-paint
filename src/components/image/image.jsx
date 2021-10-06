import { Container, IconButton, Paper, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useEffect, useState } from 'react'
import { storage } from '../../core/firebase/firebase'
import { useStyles } from './image.styles'

export const Image = React.memo(() => {
	const styles = useStyles()
	const [aa, setAa] = useState()
	useEffect(() => {
		storage
			.ref(`images/ydRXSgdUX8YUdmCOoQWC3SsIB2q1/1633558254489.png`)
			.getDownloadURL()
			.then((res) => setAa(res))
	}, [])

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
				<img src={aa} alt="" />
			</Container>
		</Paper>
	)
})
