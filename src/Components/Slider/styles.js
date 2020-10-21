import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  eachFade: {
    display: 'flex',
    width: '100%',
    '& p': {
      width: '25%',
      fontSize: '1em',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0',
      background: '#adceed',
    },
    '& > div ': {
      width: '75%',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }
    }
  }
});

export default useStyles;
