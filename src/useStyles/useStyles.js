import { makeStyles } from '@material-ui/core/styles'
export const useStylesModal = makeStyles((theme) => ({
  paper: {
    outline: '0',
    width: '100%',
    backgroundColor: '#191b26',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
