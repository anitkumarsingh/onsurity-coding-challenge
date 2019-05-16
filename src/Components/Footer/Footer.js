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
    maxWidth: 500,
  },
  darkBg: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  mainBg: {
    backgroundColor: theme.palette.ternary.main,
  },
  footerImage:{
    position:'absolute',
    left:0
  },
  developerText:{
   textAlign:'center'
  },
  copyRight:{
    color:'white',
    position:'relative',
    left:'-120px',
    bottom:'-180px'
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
          <a href="tel:+919380666054">+1 234 234 2346</a>
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
    name: 'Brand Terms of User',
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
    {/* <Title>Contributor</Title> */}<br/>
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
      className={classNames('text-light basis-100', 'sm-basis-auto sm-order-1')}
      align="center"
      variant="body2"

    >
     Coded By Anit Kumar
    </Typography>
  </div>
);

const Footer = ({ classes }) => {
  return (
    <footer>
      <Grid container spacing={24} className={classNames(
          'flex justify-center px-8 pt-4',
          // 'sm-px-6 sm-pt-6 sm-pb-3',
          classes.darkBg)}>
        <Grid item xs={3}>
        <img
          src="/icons/footerlogo.png"
          alt="Onsurity"
          width={250}
          height={'auto'}
          // onClick={this.handleChange}
          className={classes.footerImage}
          />
          <Typography className={classes.copyRight}>
            &copy; Onsurity All Rights Reserved, {year}
          </Typography>
        </Grid>
        <Grid item xs={2}>
         <NavigationItems/>
        </Grid>
        <Grid item xs={2}>
          <BrandColumn/>
        </Grid>
        <Grid item xs={2}>
          <GetInTouch/>
        </Grid>
      </Grid>
      <DeveloperMark classes={classes} />
    </footer>
  );
};

export default withStyles(styles)(Footer);
