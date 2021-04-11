import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Form } from "react-bootstrap";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfilePosts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  color="primary" onClick={handleClickOpen} style={{margin:'10px', width:'200px',}} >
        <CameraAltIcon  /> <span style={{color:'black'}}>Publier Photo</span>
      </Button>
      <Dialog fullScreen open={open}
       onClose={handleClose} 
       TransitionComponent={Transition}
       style={{display:'grid',placeItems:'center'}}
       >
        
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Photos
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>

        </AppBar>

        <div className="browsePhoto">

            <Form>
                    <Form.File 
                        id="custom-file-translate-scss"
                        lang="en"
                        custom
                    />
            </Form>
            


        </div> 

            <div>
                <h2>Description</h2>
                <textarea style={{height:'100px' , width:"800px",resize:'none',padding:'10px',fontSize:'1.2em'}} >
                </textarea>
            </div>
                

       
      </Dialog>
    </div>
  );
}
