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
        <CardActionArea className="internalActionArea">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Strengths and Limitations
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              My strengths are based on content that I'm not familiar with yet. I enjoy being an active learner so time-management
              would be a vital and important skill that needs mastery in order to ensure that time is not a limitation.
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}