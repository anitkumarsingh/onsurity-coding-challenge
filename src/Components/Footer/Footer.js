import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { withStyles } from '@material-ui/core/styles';
import links from '../../Utility/links';
import { Grid } from '@material-ui/core';

const date = new Date();
const year = date.getFullYear();

const styles = theme => ({
  innerContainer: {
    // maxWidth: 500,
    width:'100%'
  },
  darkBg: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  mainBg: {
    backgroundColor: theme.palette.ternary.main,
  },
  footerImage:{
    // position:'relative',
    // left:'5%'
  },
  developerText:{
   textAlign:'center'
  },
  copyRight:{
    color:'white',
    position:'relative',
    // left:'-120px',
     bottom:'-90px',
     [theme.breakpoints.between('xs', 'xs')]: {
      bottom:'0px',
      textAlign:'center'
    }
  },
  hideOnSmallDevice:{
    [theme.breakpoints.between('xs', 'xs')]: {
      display: 'inline-table',
    },
  },
  contactOnSmallDevice :{
    flexGrow:0,

  }
});

const Title = ({ children }) => (
  <Typography
    className="uppercase"
    color="primary"
    gutterBottom
    variant="button"
  >
    {children}
  </Typography>
);

const ItemText = ({ children, className }) => (
  <Typography
    className={classNames(className, 'inline', 'text-light')}
    variant="caption"
  >
    {children}
  </Typography>
);

const ListItemLink = props => (
  <ListItem className="p-0" button component={Link} {...props} />
);

const ListItemTextLight = ({ children }) => (
  <ListItemText
    classes={{ primary: 'text-light' }}
    primary={<ItemText>{children}</ItemText>}
  />
);

const GetInTouch = ({ className }) => (
  <div className={className}>
    <Title>Contact</Title>
    <address className="flex sm-flex-col">
      <div className="basis-50 sm-my-1">
        <MailIcon
          className="align-middle mr-2"
          color="primary"
          fontSize="small"
        />
        <ItemText>
          <a href="mailto:info@onsurity.com">info@onsurity.com</a>
        </ItemText>
      </div>
      <div className="basis-50">
        <PhoneIcon
          className="align-middle mr-2"
          color="primary"
          fontSize="small"
        />
        <ItemText>
          <a href="tel:+1 234 234 2346">+1 234 234 2346</a>
        </ItemText>
      </div>
    </address>
  </div>
);


const onsurityListItems = [
  {
    name: 'About',
    link: links.staticLink('about-us'),
  },
  {
    name: 'Products',
    link: links.staticLink('products'),
  },
  {
    name: 'Claims',
    link: links.staticLink('claims'),
  },
  {
    name: 'Plans',
    link: links.staticLink('plans'),
  },
  {
    name: 'Terms of Use',
    link: links.staticLink('terms-of-use'),
  },
  {
    name: 'Sitemap',
    link: links.staticLink('sitemap'),
  },
];

const NavigationItems = ({ className }) => (
  <div className={className}>
    <Title>Navigation</Title>
    <List component="nav" dense>
      {onsurityListItems.map((item, index) => {
        return (
              <ListItemLink key={item.name} component={Link} to={item.link}>
                <ListItemTextLight>{item.name}</ListItemTextLight>
              </ListItemLink>
        );
      })}
    </List>
  </div>
);


const brandListItems = [
  {
    name: 'Brand Terms of Use',
    link: links.staticLink('brand-terms'),
  },
  {
    name: 'Cookie Use',
    link: links.staticLink('cookies'),
  },
  {
    name: "Privacy Policy",
    link: links.staticLink('privacy-policy'),
  },
  {
    name: 'Support',
    link: links.staticLink('support'),
  },
  {
    name: 'Login',
    link: links.staticLink('login'),
  },
];

const BrandColumn = ({ className }) => (
  <div className={className}>
    <br/>
    <List component="nav" dense>
      {brandListItems.map((item2, index) => {
        return (
          <ListItemLink key={item2.name} component={Link} to={item2.link}>
            <ListItemTextLight>{item2.name}</ListItemTextLight>
          </ListItemLink>
        );
      })}
    </List>
  </div>
);

const DeveloperMark = ({ classes }) => (
  <div
    className={classNames('flex flex-wrap px-6 py-2 sm-py-4', classes.mainBg)}
  >
    <div className="sm-order-3 flex-grow" />
    <Typography
      className={classNames('text-light basis-100', 'sm-basis-auto sm-order-4')}
      align="center"
      variant="body2"
    >
     Coded By Anit Kumar
    </Typography>
  </div>
);

const Legal = ({ classes }) => (
  <div
    className={classNames('flex flex-wrap px-6 py-2 sm-py-4')}
  >
    <div className="sm-order-3 flex-grow" />
    <Typography
      className={classNames('text-light basis-100', 'sm-basis-auto sm-order-1')}
      align="center"
      variant="body2"
    >
      &copy; Onsurity
    </Typography>
    <Typography
      className={classNames(
        'text-light basis-100 mx-2',
        'sm-basis-auto sm-order-2'
      )}
      align="center"
      variant="body2"
    >
      All Rights Reserved.{year}
    </Typography>
  </div>
);

const Footer = ({ classes }) => {
  return (
    <footer>
       <div
        className={classNames(
          'flex justify-center px-4 pt-4',
          'sm-px-6 sm-pt-6 sm-pb-3',
          classes.darkBg
        )}
      >
        <div
          className={classNames(
            'flex flex-wrap max-w-sm max-w-md max-w-xl',
            classes.innerContainer
          )}
        >
      <Grid container className={classNames(classes.darkBg)}>
        <Grid item xs={5} auto="true"  className={classes.hideOnSmallDevice}>
        <div className={classes.hideOnSmallDevice}>
        <Link to={links.home()}>
        <img
          src="/icons/footerlogo.png"
          alt="Onsurity"
          width={'auto'}
          height={'auto'}
          className={classNames('mb-4 basis-100 order-1',
          'sm-basis-auto sm-order-1',
          'md-basis-20',classes.footerImage)}
          />
          </Link>
          <Legal/>
          </div>
        </Grid>
        <div className="md-order-7 md-basis-60" />
        <Grid item xs auto="true" >
         <NavigationItems  className={classNames(
              'mb-4 basis-50 order-3',
              'sm-basis-33 sm-order-1',
              'md-basis-20'
            )}/>
        </Grid>
        <Grid item xs auto="true" >
          <BrandColumn  className={classNames(
              'mb-4 basis-100 order-4',
              'sm-basis-100 sm-order-2',
              'md-basis-20'
            )}/>
        </Grid>
        <Grid item xs auto="true">
          <GetInTouch  className={classNames(
              'mb-4 basis-100 order-1',
              'sm-basis-33 sm-order-4',
              'md-basis-20'
            )}/>
        </Grid>
      </Grid>
      </div>
      </div>
      <DeveloperMark classes={classes} />
    </footer>
  );
};

export default withStyles(styles)(Footer);
