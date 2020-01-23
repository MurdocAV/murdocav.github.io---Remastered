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
    minHeight: 140,
  },
});

export default function Learning() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
        <CardActionArea className="internalActionArea">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Learning
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              My brain tends to change quick, quicker than others. Pracitce, engaging cognitively and improving your skills is essential.
              I place information in context with what I already possess. Developing abilities through effort and difficulty.
              My skills are not fixed, requiring commitment. Practice, be patient, learn from mistakes. I'm not there yet.
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}