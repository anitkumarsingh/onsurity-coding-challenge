import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SelectCard from '../../components/Card/Card';
import BrandSelect from '../../components/DropDown/OpenedMenu';
import Button from '@material-ui/core/Button';

const styles = theme =>({
  headerTitle:{
    fontSize:'3em',
    textAlign:'center',
    padding:'2.2em 0 0.4em 0',
  },
  subTitle:{
    fontSize:'1.2em',
    textAlign:'center',
    padding:'0.4em 0 3em 0'
  },
  imgContainer:{
    height: '573px',
    background:'url("/img/LadyWithPhone.png")',
    backgroundSize: 'cover',
    backgroundPosition:'100% right ',
    backgroundRepeat:'no-repeat',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
      backgroundPosition:'bottom center ',
      height:390,
     },
     [theme.breakpoints.down('xs')]: {
      backgroundSize: 'cover',
      backgroundPosition:'center center ',
      height:300
     },
     [theme.breakpoints.only('597px')]: {
      backgroundSize: 'cover',
      backgroundPosition:'center center ',
      height:400
    },
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
    },
  },
  centeredBtn: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor:'#f04336',
    boxShadow: '12px 2px 22px 12px rgba(225, 0, 0, 0.1)',
    padding:'10px 30px 10px 30px',
    fontSize:'1em',
    // backgroundImage: 'linear-gradient(to right top, #f04336, #f04336, #f04336, #f04336, #f04336)',
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    '&:focus': {
      backgroundColor: 'rgba(225, 0, 0, 0.1)',
      border:'2px solid #f04336',
      fontWeight:500
    },
  },
  spacer:{
    margin:'90px 0 90px 0'
  },
  tellUsDeviceText:{
    marginTop:'260px',
    textAlign:'center',
    fontSize:'1.2em',
  },
  personalizedTxtBox:{
    marginTop:'233px',
    textAlign:'center',
    fontSize:'1.2em',
    [theme.breakpoints.down('sm')]: {
      marginTop:'40px',
    },
  },
  payNgetInsuredTxt:{
    bottom:0,
    textAlign:'center',
    position:'relative',
    fontSize:'1.2em',
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
  },
  headerContainer:{
   padding:'0 10px 0 10px'
  },
  brandInnerContainer:{
    [theme.breakpoints.down('sm')]: {
     marginBottom:'90px',
    },
  },
  btnInnerContainer:{
    [theme.breakpoints.down('sm')]: {
      marginBottom:'90px',
     },
  }
})

class Home extends React.Component{
  componentDidMount(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.constainer}>
        <div className={classes.headerContainer}>
          <Typography component="h1" variant="h4" className={classes.headerTitle}>
            Insurance that Works for You
          </Typography>
        </div>
        <div className={classes.headerContainer}>
          <Typography component="h6" variant="h6" className={classes.subTitle}>
           Simple. Smart. Affordable
          </Typography>
        </div>
        <div className={classes.flexContainer}>
            <div style={{flexGrow:'5'}} className={classes.selectCard}>
              <SelectCard/>
            </div>
            <div style={{flexGrow:'8'}} className={classes.imgContainer}></div>
        </div>
        <div className={classes.headerContainer}>
          <Typography component="h1" variant="h4" className={classes.headerTitle}>
            {`It's Easier than You Think`}
          </Typography>
        </div>
        <div className={classes.spacer}></div>
        <div className={classes.flexiContain}>
           <div className={classes.brandInnerContainer}><BrandSelect/>
              <div className={classes.tellUsDeviceText}>
                    <Typography variant="h6" component="h6">
                      Tell us about your device
                     </Typography>
                </div>
           </div>
           <div className={classes.centeredBtn}>
             <div className={classes.btnInnerContainer}>
               <Button variant="contained" color="secondary"className={classes.button}>
                 Select
               </Button>
                <div className={classes.personalizedTxtBox}>
                      <Typography variant="h6" component="h6">
                        Select a personalized plan
                       </Typography>
                  </div>
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
                    <Typography variant="h6" component="h6">
                     Pay and get insured instantly
                    </Typography>
                </div>
           </div>
        </div>
        <div className={classes.secondSpacer}>1</div>
        {/* <Grid container>
              <Grid item xs={12} sm={12} className={classes.hideOnSmallDev}>
                <CardMedia
                  className={classes.ladyWithPhoneImg}
                  image="/img/LadyWithPhone.png"
                  title="LadyWithPhone"
                />
              </Grid>
              <div className={classes.selectContent}>
                  <SelectCard/>
              </div>
            </Grid> */}
      </div>
    )
  }
}
export default withStyles(styles)(Home);
