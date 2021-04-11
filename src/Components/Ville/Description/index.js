
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import alger from "../unnamed.jpg"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:"transparent"
  },
});

export default function DescriptionCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          
          image={alger}
          title="ALGER"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alger
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}