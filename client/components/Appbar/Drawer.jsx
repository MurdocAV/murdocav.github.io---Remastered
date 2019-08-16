import React from 'react';

import AppBar from './AppBar'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ShopRounded, ClassRounded, AccountBalanceWalletRounded, RecordVoiceOverRounded, FaceRounded, PermMediaRounded, EmailRounded} from '@material-ui/icons'

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
  };

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

  function returnMainlistIcon(index) {
    switch(index) {
      case 0:
        return (<FaceRounded />)
      case 1:
        return (<PermMediaRounded />)
      case 2:
        return (<ClassRounded />)
      default:
        return (<EmailRounded />)
    }
  }
  
  function logEvent(e) {
    console.log(e)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['About', 'Projects', 'Use Case'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{returnMainlistIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['References', 'Email', 'Hiring'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{returnSublistIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
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