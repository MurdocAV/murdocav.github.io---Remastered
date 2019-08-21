import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from './AppBar'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';
import ListItemText from '@material-ui/core/ListItemText';
import {HomeRounded, ShopRounded, ClassRounded, AccountBalanceWalletRounded, RecordVoiceOverRounded, FaceRounded, PermMediaRounded, EmailRounded} from '@material-ui/icons'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  }

  function returnMainlistIcon(index) {
    switch(index) {
      case 0:
        return (<HomeRounded />)
      case 1:
        return (<FaceRounded />)
      case 2:
        return (<PermMediaRounded />)
      case 3:
        return (<ClassRounded />)
      default:
        return (<EmailRounded />)
    }
  }

  function returnSublistIcon(index) {
    switch(index) {
      case 0:
        return (<RecordVoiceOverRounded />)
      case 1:
        return (<EmailRounded />)
      case 2:
        return (<AccountBalanceWalletRounded />)
      default:
        return (<ShopRounded />)
    }
  }

  function logEvent(e) {
  }

  function linkCases(text) {
    if (text === 'Home') {
      return('/')
    } else if (text=== 'Use Case') {
      return('Uses')
    } else {
      return(text)
    }
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'About', 'Projects', 'Use Case'].map((text, index) => (
          <Link className="noDecoration" to={linkCases(text)} 
          key={text} replace={true}>
            <ListItem button key={text}>
              <ListItemIcon>{returnMainlistIcon(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['References', 'Email', 'Hiring'].map((text, index) => (
          // TODO: Checks store for ACTIVE_PAGE, dispatches an action to goToPage(to the clicked on page)
          <Link className="noDecoration" to={linkCases(text)} key={text} replace={true}>
            <ListItem button key={text}>
              <ListItemIcon>{returnSublistIcon(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar launchDrawer={toggleDrawer('left', true)} />
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </React.Fragment>
  );
}