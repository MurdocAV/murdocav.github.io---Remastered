import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { pink, indigo } from '@material-ui/core/colors'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge';
import MouseOverPopover from './Unused/MouseOver'
import CenteredMenu from './Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo,
  },
})

export default function ButtonAppBar(props) {
  const classes = useStyles()
  props.open
  return (
    <div className='appBar'>
      <AppBar position="static" className='appBarStart' color='inherit'>
        <Toolbar className='toolBar'>
          <IconButton onClick={props.launchDrawer} edge="start" className={`${classes.menuButton} appBarText`} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={`${classes.title} `}>
            <CenteredMenu></CenteredMenu>
            {/* <MouseOverPopover> </MouseOverPopover> */}
            {/* <Link className="noDecoration appBarTitle" to={'/'} key={'Home'} replace={true}>
              MurdocAV
            </Link> */}
          </Typography>
          <Badge className={classes.margin} badgeContent={9001} max={9000} color="primary">
            <Button className='appBarText'>
              <Link className="noDecoration" to={'/Documentation'} key={'Documentation'} replace={true}>
                Documentation
              </Link>
            </Button>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  )
}
