import { Box, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { Canvas } from '../../components/canvas/canvas'
import { useStyles } from './editor-page.styles'

export const EditorPage = () => {
	const styles = useStyles()
	return (
		<Box className={styles.editor}>
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
			<Canvas />
		</Box>
	)
}
