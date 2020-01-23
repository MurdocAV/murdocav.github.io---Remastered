import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})


export default function GettingUnstuck() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
        <CardActionArea className="internalActionArea">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Getting Unstuck
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              When it comes to asking for help, I don't like imposing an issue as a demand. Friendliness is a good way
              to combat this problem. If someone seems agitated either offer a reasonable solution or leave that
              person alone.
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}