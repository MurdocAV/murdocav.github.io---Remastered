import React from 'react';

import AppBar from './AppBar'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ShopRounded} from '@material-ui/icons';
import AccountBalanceRounded from '@material-ui/icons/AccountBalanceRounded';
import {RecordVoiceOverRounded} from '@material-ui/icons'
import {AccountBalanceWalletRounded} from '@material-ui/icons'
import {ClassRounded, FaceRounded, PermMediaRounded, EmailRounded} from '@material-ui/icons'

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
    console.log('index is: ', index)
    switch(index) {
      case 0:
        return (<RecordVoiceOverRounded />)
        break;
      case 1:
        return (<ClassRounded />)
        break;
      case 2:
        return (<AccountBalanceWalletRounded />)
          break;
      default:
        return (<ShopRounded />)
    }
  }

  function returnMainlistIcon(index) {
    console.log('index is: ', index)
    switch(index) {
      case 0:
        return (<FaceRounded />)
        break;
      case 1:
        return (<PermMediaRounded />)
        break;
      case 2:
        return (<EmailRounded />)
          break;
      default:
        return (<EmailRounded />)
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
        {['About', 'Projects', 'Email'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{returnMainlistIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['References', 'Use Case', 'Hiring'].map((text, index) => (
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
