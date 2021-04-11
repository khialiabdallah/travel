import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    height:'450px',
    marginTop:'25px',
  
    
  },
  media: {
    height: 0,
    height:"250px",
    backgroundColor:'red',
    width:'100%',
    display:'flex'
    ,justifyContent:'center',
    alignItems:'center',
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProfilePublication() {
  const classes = useStyles();


  return (
    <Card  style={{backgroundColor:"#ddd",}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"/>
        }
        title="Alger"
        subheader="September 14, 2016"
      />
   
     <CardContent>
     <img
        className={classes.media}
    
    />
     </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    
      </CardActions>
    
    </Card>
  );
}
