import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from 'react-material-ui-form-validator';
import {
  SET_USER_DATA,
  PERSONAL_NUMBER,
  SIGN_UP_TEXT,
  EMAIL_ADDRESS_TEXT,
  VAIDATE_TEXT,
  EMAIL_ERROR,
  PASSWORD_TEXT,
  USER_NAME,
  FIRST_NAME_TEXT,
  LAST_NAME_TEXT,
  SELECT_LANGUAGE_TEXT,
  GEORGIA_TEXT,
  FRENCH_TEXT,
  PORTUGUESE_TEXT,
  MIN_TEXT,
} from '../../Constants/constants';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 550,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  card: {
    maxWidth: '575px',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: '#202126',
    '&:hover': {
      background: '#3c3737',
    },
  },
}));

const RegisterContainer = (props) => {
  const classes = useStyles();

  const [formData, setFordata] = useState({
    firstName: { value: '', error: false },
    lastName: { value: '', error: false },
    country: { value: 'georgia', error: false },
    personalNumber: { value: '', error: false },
    email: { value: '', error: false },
    userName: { value: '', error: false },
    password: { value: '', error: false },
  });
  const handleFieldChange = (e) => {
    e.preventDefault();
    let errorFlag = false;
    const { name } = e.target;
    if (e.target.value === '') {
      errorFlag = true;
    }
    setFordata({
      ...formData,
      [name]: { value: e.target.value.trim(), error: errorFlag },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    var promise = new Promise(function (resolve, reject) {
      resolve(props.userRegister(formData));
    });

    promise
      .then(function () {
        props.history.push('/success');
      })
      .catch(function () {
        console.log('Some error has occured');
      });
  };

  ValidatorForm.addValidationRule('isFirstName', (value) => {
    if (value.length > 2) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule('isLastName', (value) => {
    if (value.length > 4) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule('isUserName', (value) => {
    if (value.length > 4) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule('isPersonalNum', (value) => {
    if (value.length >= 11) {
      return true;
    } else {
      return false;
    }
  });

  ValidatorForm.addValidationRule('isPassword', (value) => {
    if (value.length >= 6) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <Container className={classes.card} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {SIGN_UP_TEXT}
        </Typography>
        <ValidatorForm
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
          name="registerForm"
          className={classes.form}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextValidator
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={FIRST_NAME_TEXT}
                value={formData.firstName.value || ''}
                error={formData.firstName.error || false}
                validators={['required', 'isFirstName']}
                errorMessages={[
                  VAIDATE_TEXT,
                  'The name must contain at least 2 characters',
                ]}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={LAST_NAME_TEXT}
                name="lastName"
                autoComplete="lname"
                value={formData.lastName.value || ''}
                error={formData.lastName.error || false}
                validators={['required', 'isLastName']}
                errorMessages={[
                  VAIDATE_TEXT,
                  'The surname must contain at least 4 characters',
                ]}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <SelectValidator
                variant="outlined"
                required
                fullWidth
                select
                id="country"
                label={SELECT_LANGUAGE_TEXT}
                name="country"
                value={formData.country.value || 'georgia'}
                error={formData.country.error || false}
                onChange={handleFieldChange}
              >
                <MenuItem value={'georgia'}>{GEORGIA_TEXT}</MenuItem>
                <MenuItem value={'french'}>{FRENCH_TEXT} </MenuItem>
                <MenuItem value={'portuguese'}>{PORTUGUESE_TEXT} </MenuItem>
              </SelectValidator>
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                name="personalNumber"
                label={PERSONAL_NUMBER}
                id="personalNumber"
                autoComplete="personalnumber"
                value={formData.personalNumber.value || ''}
                validators={['required', 'isPersonalNum']}
                errorMessages={[
                  VAIDATE_TEXT,
                  'Personal Number must contain at least 11 characters',
                ]}
                error={formData.personalNumber.error || false}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                fullWidth
                id="email"
                label={EMAIL_ADDRESS_TEXT}
                name="email"
                autoComplete="email"
                value={formData.email.value || ''}
                validators={['isEmail']}
                errorMessages={[EMAIL_ERROR]}
                error={formData.email.error || false}
                onChange={handleFieldChange}
              />
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                fullWidth
                required
                name="userName"
                label={USER_NAME}
                type="userName"
                id="userName"
                autoComplete="userName"
                value={formData.userName.value || ''}
                validators={['required', 'isUserName']}
                errorMessages={[
                  VAIDATE_TEXT,
                  'Username must contain at least 4 characters',
                ]}
                error={formData.userName.error || false}
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                name="password"
                label={PASSWORD_TEXT}
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password.value || ''}
                validators={['isPassword']}
                errorMessages={[MIN_TEXT]}
                error={formData.password.error || false}
                helperText={[MIN_TEXT]}
                onChange={handleFieldChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {SIGN_UP_TEXT}
          </Button>
        </ValidatorForm>
      </div>
    </Container>
  );
};

const mapDispachToProps = (dispatch) => {
  return {
    userRegister: (formdata) => {
      dispatch({ type: SET_USER_DATA, data: formdata });
    },
  };
};

export default connect(null, mapDispachToProps)(RegisterContainer);
