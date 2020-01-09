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

export default function CardA() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/ReFlick.png"
          title="ReFlick"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Reflick
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Playable browser game, draw different colours and click on them to take you to a different page with another drawing.
            Authors: Azaan Virk, Alice Gatland, John Tapsel, Struant Wall, Eve Henare
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}