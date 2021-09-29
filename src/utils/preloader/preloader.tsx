import { Box } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import React from 'react'
import { useStyles } from './preloader.styles'

export const Preloader: React.FC = React.memo(() => {
	const styles = useStyles()
	return (
		<Box>
			<Backdrop className={styles.backdrop} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
	)
})
