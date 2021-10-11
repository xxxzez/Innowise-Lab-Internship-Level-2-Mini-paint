import { Box, Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Canvas } from '../../components/canvas/canvas'
import { useStyles } from './editor-page.styles'

export const EditorPage = React.memo(() => {
	const styles = useStyles()

	return (
		<Box className={styles.editor}>
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
			</Box>
			<Canvas />
		</Box>
	)
})
