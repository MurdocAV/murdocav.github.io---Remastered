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

export default function AttentionEI() {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} cardInternal`}>
        <CardActionArea className="internalActionArea">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Attention and Emotional Intelligence            
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Being able to be aware of, control, and express one's emotions is a great skill. You need to handle
              interpersonal relationships judiciously and empathetically. To do this I find it helpful to be aware of
              yourself, your body, your emotions, your presence. This can help you better organize your thoughts and
              attention.
          </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}