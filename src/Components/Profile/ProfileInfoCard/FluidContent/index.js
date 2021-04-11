import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProfilePublication from '../../ProfilePublication';

function FluidContent() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
         component="div"
        style={
          { 
          backgroundColor: '#fff', 
          minHeight: '100vh',
          width:"50vw",
           position:"relative",
           left:"-150px",
           display:'flex',
           justifyContent:'center',
          
          }}
          
          >
          <ProfilePublication/>
          </Typography>
     
          
      </Container>
    </React.Fragment>
  );
}

export default  FluidContent;