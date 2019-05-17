import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SelectCard from '../../Components/Card/Card';

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
  imgContainer:{
    height: '590px',
    background:'url("/img/LadyWithPhone.png")',
    backgroundSize: 'cover',
    backgroundPosition:'top right ',
    backgroundRepeat:'no-repeat',

  },
  constainer:{background:'white'},
  media:{
    width:'480px',
    // height:'490px',
    marginLeft:'30px',
    top:'50%'
  },
  flexContainer:{
    display: 'flex',
    alignItems: 'stretch',
    // fontSize:'22px',
    '&&>div':{
      color: 'white',
      width: '100px',
      margin: '10px',
    }
  },
  selectCard:{
   position:'relative',
   marginTop:'40%',
  },
  // flexiContain:{
  //   display: 'flex',
  //   alignItems: 'stretch',
  //   backgroundColor: '#f1f1f1',

  //   '&&>div':{
  //     backgroundColor: 'DodgerBlue',
  //     color: 'white',
  //     width: '100px',
  //     margin: '10px',
  //     textAlign: 'center',
  //     lineHeight: '75px',
  //     fontSize: '30px'
  //   }
  // }
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
      {/* <div className={classes.imgContainer}>
        <div className={classes.media}>
             <SelectCard/>
        </div>
      </div> */}
      <div className={classes.flexContainer}>
      <div style={{flexGrow:'5'}} className={classes.selectCard}> <SelectCard/></div>
      <div style={{flexGrow:'8'}} className={classes.imgContainer}></div>
      </div>
      {/* <div className={classes.flexiContain}>
         <div style={{flexGrow:'4'}}>1</div>
         <div style={{flexGrow:'4'}}>2</div>
         <div style={{flexGrow:'4'}}>3</div>
      </div> */}
    </div>
  )
}
export default withStyles(styles)(Home);
