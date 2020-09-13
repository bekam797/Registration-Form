import * as actionTypes from '../../Constants/constants';

const initialState = {
  userData: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: {
          firstName: action.data.firstName.value,
          lastName: action.data.lastName.value,
          country: action.data.country.value,
          personalNumber: action.data.personalNumber.value,
          email: action.data.email.value,
          userName: action.data.userName.value,
          password: action.data.password.value,
        },
      };
    default:
      return state;
  }
}

export default reducer;
