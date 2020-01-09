import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 300,
  },
  media: {
    height: 140,
  },
});

export default function CardB() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/LukeMitchells.png"
          title="Luke Mitchels"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Luke Mitchels
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Simple studio website for a group of music artists living in Ellerslie.
            Autor: Azaan Virk
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}