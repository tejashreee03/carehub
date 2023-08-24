// // ReportsPageStyles.js
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(4),
//   },
//   card: {
//     marginBottom: theme.spacing(2),
//   },
//   divider: {
//     margin: theme.spacing(2, 0),
//   },
// }));

// export default useStyles;
// ReportsPageStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginLeft: 250, // Adjust this value to match the sidebar width
    transition: 'margin-left 0.3s',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0, // Collapse the margin on smaller screens

    },
  },
  card: {
    marginBottom: theme.spacing(2),
    
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default useStyles;
