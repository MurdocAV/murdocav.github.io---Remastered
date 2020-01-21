import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '2px 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop: 12,
    paddingTop: 15
  },
});

export default function AboutCard(props) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={`classes.card cardMUI about`}>
      <CardContent>
        <Typography variant="h5" component="h2">
        <br/>
        <strong className="strongTag">Learning</strong>
        <br/>
        We are constantly being changed by our experiences. You aren't hardwired to be specifically smart at a
        set skill when you're born. Pracitce, engaging cognitively, improving your skills is vital. Put the
        information you're learning in context with other informatino you already possess, build a foundation of
        knowledge. Abilities are developed through effort and difficulty. Talents are not fixed, not giving up easily.
        Practice, be patient, learn from mistakes. I'm not there yet.
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}