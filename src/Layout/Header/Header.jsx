import React, { useState, Fragment} from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,

} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";



const Navbar = () => {


const [nav,setNav] = useState(false)
    
    const classes = useStyles();
  const handleNav=()=>{
    if (window.scrollY >= 40){
      setNav(true)
    }else{
      setNav(false)
    }
  }
  window.addEventListener('scroll',handleNav)


  return (
    <Fragment>
      <AppBar className={nav ? classes.appBarActive : classes.appBar}>
        <Toolbar>
          <Tabs className={classes.tabs}>
              <Tab className={classes.tab}  component={Link} to='/' label="Home"/>
              <Tab className={classes.tab} component={Link} to='/service'  label="Services" />
              <Tab  className={classes.tab} component={Link} to='/about' label="about" />
              <Tab className={classes.tab}  component={Link} to='/contact' label="Contact"  />
          </Tabs>
        </Toolbar>
      </AppBar>
  </Fragment>
  );
};

export default Navbar;

const useStyles =  makeStyles((theme) => ({
  appBar: {
    background: 'transparent',
    
  },
  appBarActive:{
    background: '#3598dc',
  },
  tabs: {
    marginLeft: "auto",
    marginRight: '2rem',
    [theme.breakpoints.down("md")]: {
          
      marginRight: '1rem',
    },
    [theme.breakpoints.down("sm")]: {
          
      marginLeft: '0rem',
    },
  },
  tab: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    "&:hover": {
      borderBottom: "3px solid black",
    },
    [theme.breakpoints.down("sm")]: {
          
      fontSize: "1rem",
    },

  },
}));