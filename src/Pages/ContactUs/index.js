import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles}  from '@material-ui/core/styles';

const styles = theme =>({
    title:{
      fontSize:'1em',
      margin:'20px 0 20px 0',
      textAlign:'center'
    }
})

const Contact_Us = ({classes}) =>{
  return(
    <div>
      <Typography component="h1" variant="h4" className={classes.title}>
        Hello from contact us page
      </Typography>
    </div>
  )
}
export default withStyles(styles)(Contact_Us);
