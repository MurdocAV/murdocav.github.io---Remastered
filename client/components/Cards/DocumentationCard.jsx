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

export default function DocumentationCard(props) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={`classes.card cardMUI`}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Technolgies
        </Typography>
        <Typography variant="h5" component="h2">
            React, Redux, React-bootstrap,
            Material-U.I,
            Node.js, Express, Knex, SQLite,
            Python, ThreeJS.
            UI/UX Design: CSS3 – Grid & Flexbox, Sass.
            RESTful API, JWT and
            Authentication, Javascript-ES6, Typescript, C, SQL, NoSQLDB's
            HTML, Bootstrap, Linux/MacOS terminal, LAMP, GoLang, Ruby, PHP.
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Teamwork: Peer Programming, Feedback, Active Listening, Git, GitHub - Projects, Pulls, Terminal|
            Agile: Scrum, Stand ups, Retrospectives.
        </Typography>
        <Typography variant="body2" component="p">
          And growing by the day
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">What kind of car does a Jedi drive? A Toy-Yoda.</Button>
      </CardActions>
    </Card>
  );
}