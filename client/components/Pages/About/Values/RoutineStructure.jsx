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

export default function RoutineStructure() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
        <CardActionArea className="internalActionArea">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Routine and Structure
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Working with others productively requires having manners, respect and effective concise communication.
              I believe it's essential to be able to get along with your peers if you are to be sucessful in any field.
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}