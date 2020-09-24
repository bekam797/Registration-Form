import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { SET_USER_DATA } from '../../Constants/constants';
import { connect } from 'react-redux';
import { validate, validateForm } from '../../validation/validation';

import './Registercontainer.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 550,
    color: '#fff',
    backgroundColor: '#424242',
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
  buttonPos: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '6px',
  },
  submit: {
    fontFamily: 'lbet-mt',
    width: '280px',
    padding: '10px',
    background: '#cecece',
    color: '#1b1b1b',
    borderRadius: '2px',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontWeight: 'bold',
    '&:hover': {
      background: '#43a047',
      color: '#fff',
    },
  },
}));

const RegisterContainer = (props) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    country: { value: 'georgia', error: '' },
    personalNumber: { value: '', error: '' },
    birthNumber: { value: 'რიცხვი', error: '' },
    birthMonth: { value: 'თვე', error: '' },
    birthYear: { value: 'წელი', error: '' },
    phone: { value: '', error: '' },
    email: { value: '', error: '' },
    userName: { value: '', error: '' },
    password: { value: '', error: '' },
  });

  const [fieldStatus, setFieldStatus] = useState(false);

  const handleFieldChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    const errorFlag = validate(name, value);

    setFormData({
      ...formData,
      [name]: { value: e.target.value.trim(), error: errorFlag },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm(formData)) {
      const promise = new Promise(function (resolve, reject) {
        resolve(props.userRegister(formData));
      });

      promise
        .then(function () {
          props.history.push('/success');
        })
        .catch(function () {
          console.log('Some error has occured');
        });
    } else {
      setFieldStatus(true);
    }
  };

  return (
    <Container className={classes.card} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: '30px' }}
        >
          რეგისტრაცია
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">
              სახელი <span className="form-required">*</span>
            </label>

            <input
              className="form-control"
              name="firstName"
              value={formData.firstName.value}
              type="text"
              onChange={handleFieldChange}
            />
            <div
              className="error"
              style={{
                display: formData.firstName.error === '' ? 'none' : 'block',
              }}
            >
              <span>{formData.firstName.error}</span>
            </div>
            <div
              className="field-status"
              style={{
                display:
                  fieldStatus && formData.firstName.value.length <= 2
                    ? 'block'
                    : 'none',
              }}
            ></div>
          </div>
          <div className="form-group">
            <label className="form-label">
              გვარი <span className="form-required">*</span>
            </label>
            <input
              className="form-control"
              name="lastName"
              value={formData.lastName.value}
              type="text"
              onChange={handleFieldChange}
            />
            <div
              className="error"
              style={{
                display: formData.lastName.error === '' ? 'none' : 'block',
              }}
            >
              <span>{formData.lastName.error}</span>
            </div>
            <div
              className="field-status"
              style={{
                display:
                  fieldStatus && formData.lastName.value.length <= 4
                    ? 'block'
                    : 'none',
              }}
            ></div>
          </div>
          <div className="form-group">
            <label className="form-label">
              ქვეყანა <span className="form-required">*</span>
            </label>
            <select
              className="form-control"
              name="country"
              value={formData.country.value || 'georgia'}
              onChange={handleFieldChange}
            >
              <option value="georgia">Georgia(საქართველო)</option>
              <option value="french">French</option>
              <option value="portuguese">Portuguese</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              პირადი ნომერი <span className="form-required">*</span>
            </label>
            <input
              className="form-control"
              name="personalNumber"
              value={formData.personalNumber.value || ''}
              type="number"
              onChange={handleFieldChange}
            />
            <div
              className="error"
              style={{
                display:
                  formData.personalNumber.error === '' ? 'none' : 'block',
              }}
            >
              <span>{formData.personalNumber.error}</span>
            </div>
            <div
              className="field-status"
              style={{
                display:
                  fieldStatus && formData.personalNumber.value.length <= 8
                    ? 'block'
                    : 'none',
              }}
            ></div>
          </div>
          <div>
            <div className="form-group">
              <label className="form-label">
                დაბადების თარიღი <span className="form-required">*</span>
              </label>
              <div>
                <select
                  className="birth-number"
                  name="birthNumber"
                  value={formData.birthNumber.value || 'რიცხვი'}
                  onChange={handleFieldChange}
                >
                  <option value="რიცხვი">რიცხვი</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                </select>
                <div
                  style={{
                    display:
                      fieldStatus && formData.birthNumber.value === 'რიცხვი'
                        ? 'block'
                        : 'none',
                    width: '97px',
                    height: '2px',
                    background: '#A21D1D',
                    position: 'absolute',
                  }}
                ></div>
              </div>
              <div>
                <select
                  className="birth-month"
                  name="birthMonth"
                  value={formData.birthMonth.value || 'თვე'}
                  onChange={handleFieldChange}
                >
                  <option value="თვე">თვე</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                </select>
                <div
                  style={{
                    display:
                      fieldStatus && formData.birthMonth.value === 'თვე'
                        ? 'block'
                        : 'none',
                    width: '80px',
                    height: '2px',
                    background: '#A21D1D',
                    position: 'absolute',
                    marginLeft: '10px',
                  }}
                ></div>
              </div>
              <div>
                <select
                  className="birth-year"
                  name="birthYear"
                  value={formData.birthYear.value || 'წელი'}
                  onChange={handleFieldChange}
                >
                  <option value="წელი">წელი</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                </select>
                <div
                  style={{
                    display:
                      fieldStatus && formData.birthYear.value === 'წელი'
                        ? 'block'
                        : 'none',
                    width: '83px',
                    height: '2px',
                    background: '#A21D1D',
                    position: 'absolute',
                    marginLeft: '10px',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">
              ტელეფონი <span className="form-required">*</span>
            </label>
            <input
              className="form-control"
              type="number"
              name="phone"
              placeholder="(+995) --- -- -- --"
              value={formData.phone.value}
              onChange={handleFieldChange}
            />
            <div
              className="error"
              style={{
                display: formData.phone.error === '' ? 'none' : 'block',
              }}
            >
              <span>{formData.phone.error}</span>
            </div>
            <div
              className="field-status"
              style={{
                display:
                  fieldStatus && formData.phone.value.length <= 9
                    ? 'block'
                    : 'none',
              }}
            ></div>
          </div>

          <div className="form-group">
            <label className="form-label">ელ-ფოსტა</label>
            <input
              className="form-control"
              name="email"
              value={formData.email.value}
              type="text"
              onChange={handleFieldChange}
            />
            <div
              className="error"
              style={{
                display: formData.email.error === '' ? 'none' : 'block',
              }}
            >
              <span>{formData.email.error}</span>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">
              მომხმარებელი <span className="form-required">*</span>
            </label>
            <input
              className="form-control"
              name="userName"
              value={formData.userName.value}
              type="text"
              onChange={handleFieldChange}
            />
            <div
              className="error"
              style={{
                display: formData.userName.error === '' ? 'none' : 'block',
              }}
            >
              <span>{formData.userName.error}</span>
            </div>
            <div
              className="field-status"
              style={{
                display:
                  fieldStatus && formData.userName.value.length <= 4
                    ? 'block'
                    : 'none',
              }}
            ></div>
          </div>
          <div className="form-group">
            <label className="form-label">
              პაროლი <span className="form-required">*</span>
            </label>
            <input
              className="form-control"
              name="password"
              value={formData.password.value}
              type="password"
              onChange={handleFieldChange}
            />
            <div
              className="error"
              style={{
                display: formData.password.error === '' ? 'none' : 'block',
              }}
            >
              <span>{formData.password.error}</span>
            </div>
            <div
              className="field-status"
              style={{
                display:
                  fieldStatus && formData.password.value.length <= 6
                    ? 'block'
                    : 'none',
              }}
            ></div>
          </div>
          <div className={classes.buttonPos}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              რეგისტრაცია
            </Button>
          </div>
        </form>
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
