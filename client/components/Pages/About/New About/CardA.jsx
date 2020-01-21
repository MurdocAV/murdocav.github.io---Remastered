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
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ReFlick
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Built using React-Redux. Created for phones. A browser game that allows you draw different pages and link them together.
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}