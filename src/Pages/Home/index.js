import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SelectCard from '../../Components/Card/Card';
import BrandSelect from '../../Components/DropDown/BrandDropDwn';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

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
    flexWrap:'wrap',
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
  flexiContain:{
    display: 'flex',
    flexWrap:'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    '&&>div':{
      backgroundColor: 'white',
      color: 'white',
      width: '300px',
      // marginBottom: '10px',
      // height:'300px'
    }
  },
  centeredBtn: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor:'#f04336',
    boxShadow: '12px 12px 12px 12px rgba(225, 0, 0, 0.1)',
    padding:'10px 30px 10px 30px',
    fontSize:'1em'
  },
  row:{
    display:'flex',
    '&&:after':{
      content:'',
      display:'table',
      clear:'both'
    }
  },
  box:{
    height : '200px',
    color : 'white',
    float: 'left',
    width: '33.33%',
    padding: '15px',
    textAlign:'center'
  },
  spacer:{
    margin:'90px 0 90px 0'
  },
  tellUsDeviceText:{
    marginTop:'260px',
    textAlign:'center'
  },
  personalizedTxtBox:{
    marginTop:'233px',
    textAlign:'center'
  },
  payNgetInsuredTxt:{
    bottom:0,
    textAlign:'center',
    position:'relative'
  },
  secondSpacer:{
    margin:'90px 0 0px 0',
    background:'white',
    color:'white'
  },
  top: {
    marginTop: '10px',
    fontSize: '1rem',
  },
  selectContent: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '-507px',
    width: '41%',
    // marginLeft: '3%',
    backgroundColor: '#ffff',
  },
  ladyWithPhoneImg: {
    height: 600,
    // background:'url("/img/LadyWithPhone.png")',
    backgroundSize: '700px',
    backgroundPosition:'top right ',
    backgroundRepeat:'no-repeat',
  },
  hideOnSmallDev:{
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
  }

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
      <div className={classes.flexContainer}>
          <div style={{flexGrow:'5'}} className={classes.selectCard}>
            <SelectCard/>
          </div>
          <div style={{flexGrow:'8'}} className={classes.imgContainer}></div>
      </div>
      <Typography component="h1" variant="h4" className={classes.headerTitle}>
       {`It's Easier than You Think`}
      </Typography>
      <div className={classes.spacer}></div>
      <div className={classes.flexiContain}>
         <div><BrandSelect/>
            <div className={classes.tellUsDeviceText}>
                  <Typography variant="subtitle1" component="h2">
                    Tell us about your device
                   </Typography>
              </div>
         </div>
         <div className={classes.centeredBtn}>
             <Button variant="contained" color="secondary"className={classes.button}>
               Select
             </Button>
              <div className={classes.personalizedTxtBox}>
                    <Typography variant="subtitle1" component="h2">
                      Select a personalized plan
                     </Typography>
                </div>
         </div>
         <div className={classes.centeredBtn}>
            <img
              src="/img/InsuredGIF.png"
              alt="Onsurity"
              width={'auto'}
              height={290}
              />
              <div className={classes.payNgetInsuredTxt}>
                  <Typography variant="subtitle1" component="h2">
                   Pay and get insured instantly
                  </Typography>
              </div>
         </div>
      </div>
      <div className={classes.secondSpacer}>1</div>
      {/* <div className={classes.row}>
         <div className={classes.box}>
            <Typography variant="subtitle1" component="h2">Tell us about your device</Typography>
         </div>
         <div className={classes.box}>
            <Typography variant="subtitle1" component="h2">Select a personalized plan</Typography>
         </div>
         <div className={classes.box}>
            <Typography variant="subtitle1" component="h2">Pay and get insured instantly</Typography>
         </div>
      </div> */}
      <Grid container>
            <Grid item xs={12} sm={12} className={classes.hideOnSmallDev}>
              <CardMedia
                className={classes.ladyWithPhoneImg}
                image="/img/LadyWithPhone.png"
                title="about us"
              />
            </Grid>
            <div className={classes.selectContent}>
                <SelectCard/>
            </div>
          </Grid>
    </div>
  )
}
export default withStyles(styles)(Home);
