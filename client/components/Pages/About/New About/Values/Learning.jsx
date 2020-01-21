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
});

export default function StrengthsLimitations() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Learning
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We are constantly being changed by our experiences. You aren't hardwired to be specifically smart at a
              set skill when you're born. Pracitce, engaging cognitively, improving your skills is vital. Put the
              information you're learning in context with other informatino you already possess, build a foundation of
              knowledge. Abilities are developed through effort and difficulty. Talents are not fixed, not giving up easily.
              Practice, be patient, learn from mistakes. I'm not there yet.
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}