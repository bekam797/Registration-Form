import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#202126',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  let name = null;
  if (props.userData && props.userData.firstName) {
    name = (
      <h3
        style={{ color: '#FFCA2C', textTransform: 'uppercase' }}
      >{`Hello ${props.userData.firstName}`}</h3>
    );
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Link to="/">
            <Logo />
          </Link>
          <div>{name}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: { ...state.userData },
  };
};

export default connect(mapStateToProps)(Header);
