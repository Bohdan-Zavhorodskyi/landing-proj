import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    boxShadow: '-2px 0 3px black',
  },
  input: {
    width: '250px',
  },
  formItemsWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formItem: {
    display: 'block',
  },


});

export default useStyles;
