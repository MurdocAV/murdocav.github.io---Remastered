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
  },
  media: {
    height: 140,
  },
});

export default function CardA() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
      <a className='noDecoration aTag' href='https://github.com/MurdocAV/Audio-Engineers-Portfolio-2019-Revisited' key={'PokeName'} replace={true}>
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
              A website to showcase the music of a recording studio in Ellerslie, implementation of Spotify API and different front-end ideas like modals.
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}