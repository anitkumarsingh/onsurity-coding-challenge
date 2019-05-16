import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import links from '../../Utility/links';
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLinkText:{
    padding:'20px 10px 0 10px',
    justifyContent:'center',
    alignItems:'center'
     }
});

const navLinkItems = [
  {
    name: 'Claims',
    link: links.staticLink('claims'),
  },
  {
    name: 'About',
    link: links.staticLink('about-us'),
  },
  {
    name: 'ContactUs',
    link: links.staticLink('contact-us'),
  },
  {
    name: 'Login',
    link: links.staticLink('login'),
  },
];

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {/* <MenuItem onClick={this.handleMenuClose}>Claims</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My About us</MenuItem> */}
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
       {navLinkItems.map((item,id)=>{
         return(
           <Link to={item.link} key={item.name + 'navM'}>
              <MenuItem onClick={this.handleMobileMenuClose}>
                <Typography>{item.name}</Typography>
              </MenuItem>
           </Link>
         )
       })}
       </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to={links.home()}>
              <img
                src="/icons/logo.png"
                alt="Onsurity"
                width={110}
                height={'auto'}
                // onClick={this.handleChange}
                />
              </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {navLinkItems.map((item,id)=>{
              return(
                <Link to={item.link} key={item.name + 'nav'}>
                    <MenuItem onClick={this.handleMobileMenuClose}>
                      <Typography>{item.name}</Typography>
                    </MenuItem>
                </Link>
              )
             })}
              <img
                src="/icons/applelogo.png"
                alt="Onsurity"
                width={90}
                height={50}
                onClick={this.handleChange}
             />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
