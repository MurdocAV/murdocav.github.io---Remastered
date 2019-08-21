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

export default function Form() {
  const classes = useStyles()

  const [data, setData] = React.useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  })

  function handleSubmit (event) {
    event.preventDefault()
    // const data = new FormData(event.target)
    console.log(data)
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // })
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
          <OutlinedButton type="submit" onClick={(e) => handleSubmit(e)}/>
        </div>
      </ThemeProvider>
    </form>
  )
}