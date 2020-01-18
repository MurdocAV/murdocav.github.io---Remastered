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
        <strong className="strongTag">Strengths and Limitations</strong>
        <br/>
        My strengths are based on content that I'm not familiar with yet. I enjoy being an active learner so time-management
        would be a big important technique in order to make sure it's a strength and not a limitation.
        <br/>
        <strong className="strongTag">Routine and Structure</strong>
        <br/>
        Working with others productively requires having manners, respect and effective concise communication.
        I believe it's essentail to be able to get along with your peers if you are to be sucessful in any field.
        <br/>
        <strong className="strongTag">Getting Unstuck</strong>
        <br/>
        When it comes to asking for help, I don't like imposing an issue as a demand. Friendliness is a good way
        to combat this problem. If someone seems agitated either offer a reasonable solution or leave that
        person alone.
        <br/>
        <strong className="strongTag">Winding down</strong>
        <br/>
        Friends and family are an important commitment for me, needing dedicated time to outside work. I have
        found that you can't get through all the content without breaks. It's important, essential to come at the
        problem with a fresh set of eyes to gain insight that you didn't have previously.
        <br/>
        <strong className="strongTag">Attention and Emotional Intelligence</strong>
        <br/>
        Being able to be aware of, control, and express one's emotions is a great skill. You need to handle
        interpersonal relationships judiciously and empathetically. To do this I find it helpful to be aware of
        yourself, your body, your emotions, your presence. This can help you better organize your thoughts and
        attention.
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