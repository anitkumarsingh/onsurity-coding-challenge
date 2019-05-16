import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
 title:{
   fontSize:'1em',
   margin:'20px 0 20px 0',
   textAlign:'center'
 }
});

const About_Us = ({ classes }) =>{
  return(
    <div>
      <Typography component="h1" variant="h4" className={classes.title}>
        Hello from About Us page
      </Typography>
    </div>
  )
}
export default withStyles(styles)(About_Us);
