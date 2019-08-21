import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import { green } from '@material-ui/core/colors'
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
}))

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})

export default function Form(props) {
  const classes = useStyles()

  const [data, setData] = React.useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
    QueryType: ''
  })

  function handleSubmit (event) {
    event.preventDefault()
    console.log(data)
  }

  function changeHandler(label, event) {
    data[label] = event.target.value
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className={`${classes.root} formMUI`} noValidate>
      <ThemeProvider theme={theme}>
        <div className="lineOne">
          <TextField
            className={`${classes.margin} one`}
            id={"Name"}
            label="Name"
            variant="outlined"
            onChange={(e) => changeHandler('Name', e)}
          />
          <TextField
            className={`${classes.margin} one`}
            label="Email" 
            variant="outlined"
            onChange={(e) => changeHandler('Email', e)}
          />
          <DialogSelect changeHandler={changeHandler} />
          {/* <QueryType className="oneHalf"></QueryType> */}
          <TextField
            className={`${classes.margin} two`}
            label="Subject"
            variant="outlined"
            onChange={(e) => changeHandler('Subject', e)}
          />
          {/* </div>
          <div className="lineTwo"> */}
          <TextField
            className={`${classes.margin} two message`}
            label="Message"
            variant="outlined"
            onChange={(e) => changeHandler('Message', e)}
          />
          <OutlinedButton type="submit" onClick={() => isSubmited()}/>
        </div>
      </ThemeProvider>
    </form>
  )
}