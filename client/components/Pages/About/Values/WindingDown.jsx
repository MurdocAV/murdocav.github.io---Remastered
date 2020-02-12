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

export default function WindingDown() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
        <CardActionArea className="internalActionArea">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Winding down
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It's important to have outside commitments, needing dedicated time to away from work. I have
              found that you can't get through all the content without breaks. It's important, essential, to come back to the
              problem with a fresh set of eyes to gain insight that you didn't have previously.
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}