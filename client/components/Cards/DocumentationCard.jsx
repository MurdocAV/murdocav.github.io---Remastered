/* eslint-disable no-console */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
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
    <Card className={`classes.card cardMUI documentation`}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Technolgies
        </Typography>
        <Typography variant="h5" component="h2">
          <div className='documentationContatiner'>
              <strong>Front-End: </strong>React, Redux, React-bootstrap<br/>
              Material-U.I.<br/>
              <Divider variant="middle" />
              <strong>Middleware: </strong>Node.js, Express, Knex<br/>
              <Divider variant="middle" />
              <strong>Principals: </strong>  Authentication, Representational State Transfer/REST Paradigms for APIs, JWT<br/>
              <Divider variant="middle" />
              <strong>Design:</strong>
              CSS3 – Grid & Flexbox, Sass, ThreeJS, Bootstrap<br/>
              <Divider variant="middle" />
              <strong>Back-end & Basics: </strong>Python and Javascript-ES6, Typescript, C, Java, SQL, SQLite, NoSQLDB's<br/>
              HTML, Linux/MacOS terminal, LAMP, GoLang, Ruby, PHP.
            </div>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Teamwork: Peer Programming, Feedback, Active Listening, Git, GitHub - Projects, Pulls, Terminal.<br/>
            Agile: Scrum, Stand ups, Retrospectives.
        </Typography>
        <Typography variant="body2" component="p">
          And growing by the day
        </Typography>
      </CardContent>
      <CardActions>
        <a className='noDecoration aTag' href='https://www.rottentomatoes.com/m/star_wars_episode_iii_revenge_of_the_sith' key={'joke'} replace={true}>
          <Button size="small">
            What kind of car does a Jedi drive? A Toy-Yoda.
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}