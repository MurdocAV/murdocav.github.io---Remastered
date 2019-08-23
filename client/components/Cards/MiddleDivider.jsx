/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {CheckCircleOutlineRounded, EmailRounded, FontDownloadRounded, SearchRounded, TocRounded} from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDivider(props) {
  const classes = useStyles();
  const {name, queryType, email, message, subject} = props.data 
  console.log(props)
  return (
    <div className={`${classes.root} insetDivider`}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Message
            </Typography>
          </Grid>
          <Grid item>
            <Avatar>
              <CheckCircleOutlineRounded />
            </Avatar>
          </Grid>
        </Grid>
        <Typography className="formMessage" color="textSecondary" variant="body2">
          {message}
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <TocRounded />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Subject" secondary={subject} />
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SearchRounded />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Query Type" secondary={queryType} />
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FontDownloadRounded />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailRounded />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
      </div>
    </div>
  );
}