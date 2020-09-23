import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    margin: 'auto',
    color: '#fff',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    color: '#43a047',
  },
}));

const SuccessPage = (props) => {
  const classes = useStyles();

  let name = null;
  if (props.userData && props.userData.userName && props.userData.email) {
    name = (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Your registration is successful
            </Typography>
            <div>
              <List>
                <ListItem>
                  <ListItemText
                    primary={`UserName: ${props.userData.userName}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Email: ${props.userData.email}`} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Country: ${props.userData.country}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Personal Number: ${props.userData.personalNumber}`}
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    name = (
      <h1
        style={{ color: '#c32b32', display: 'flex', justifyContent: 'center' }}
      >
        You aren't registered....
      </h1>
    );
  }
  return <>{name}</>;
};

const mapStateToProps = (state) => {
  return {
    userData: { ...state.userData },
  };
};

export default connect(mapStateToProps)(SuccessPage);
