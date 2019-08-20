import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import QueryType from './QueryType'
import DialogSelect from './Select'
import OutlinedButton from './Submit'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function Form() {
  const classes = useStyles();

  return (
    <form className={`${classes.root} formMUI`} noValidate>
      <ThemeProvider theme={theme}>
        <div className="lineOne">
        <TextField
          className={`${classes.margin} one`}
          label="Name"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <TextField
          className={`${classes.margin} one`}
          label="Email" 
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <DialogSelect />
        {/* <QueryType className="oneHalf"></QueryType> */}
        <TextField
          className={`${classes.margin} two`}
          label="Subject"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        {/* </div>
        <div className="lineTwo"> */}
        <TextField
          className={`${classes.margin} two message`}
          label="Message"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <OutlinedButton />
        </div>
      </ThemeProvider>
    </form>
  );
}