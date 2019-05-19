import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import BrandSelect from '../DropDown/BrandDropDwn';
import ModelSelect from '../DropDown/ModelDropDwn';
import BuyTimeSelect from '../DropDown/BuyTimeDropDwn';

const styles = theme=>({
  card: {
    minWidth: 275,
    boxShadow: '5px 5px 25px 0px rgba(46, 61, 73, 0.2)',
    position:'relative',
    top:'3%',
    left:'30px',
    height:330,
    paddingTop:'20px',
    [theme.breakpoints.down('sm')]: {
      left:'20px',
      marginLeft:'auto',
      marginRight:'auto',
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing.unit,
    // backgroundColor:'#f04336',
    boxShadow: '12px 2px 22px 12px rgba(225, 0, 0, 0.1)',
    padding:'10px 30px 10px 30px',
    fontSize:'1em',
    backgroundImage: 'linear-gradient(to right top, #f04336, #f04336, #f04336, #f04336, #f04336)'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardContentContainer:{
    margin:'5px'
  }
});

const SelectCard = (props) =>{
  const { classes } = props;

  return (
    <Card className={classes.card}>
     <div className={classes.cardContentContainer}>
      <CardContent>
        <BrandSelect/>
      </CardContent>
      <CardContent>
        <ModelSelect/>
      </CardContent>
      <CardContent>
        <BuyTimeSelect/>
      </CardContent>
      <div className={classes.centered}>
        <Button variant="contained" color="secondary"className={classes.button}>
          Get Insured
        </Button>
        </div>
      </div>
    </Card>

  );
}

SelectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectCard);
