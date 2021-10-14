import { Box } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { FC } from 'react'
import { useStyles } from './styles'

export const Preloader: FC = () => {
	const styles = useStyles()
	return (
		<Box>
			<Backdrop className={styles.backdrop} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
	)
}
