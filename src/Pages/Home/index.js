import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  headerTitle:{
    fontSize:'3em',
    textAlign:'center',
    padding:'1.2em 0 0.4em 0'
  },
  subTitle:{
    fontSize:'1em',
    textAlign:'center',
    padding:'1em 0 3em 0'
  },
  media:{
    height: 990,
    background:'url("/img/LadyWithPhone.png")',
    backgroundSize: 'cover',
    backgroundPosition:'right center',
    backgroundRepeat:'no-repeat'

  },
  constainer:{background:'white'}
})

const Home = ({classes}) =>{
  return(
    <div className={classes.constainer}>
      <Typography component="h1" variant="h4" className={classes.headerTitle}>
       Insurance that Works for You
      </Typography>
      <Typography component="h6" variant="h6" className={classes.subTitle}>
       Simple. Smart. Affordable
      </Typography>
      <div className={classes.media}>

      </div>
    </div>
  )
}
export default withStyles(styles)(Home);
