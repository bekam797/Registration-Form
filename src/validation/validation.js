export const validate = (name, value) => {
  const notEmpty = value.length > 0;
  const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  let errorFlag = '';

  switch (name) {
    case 'firstName':
      errorFlag =
        notEmpty && value.length <= 2
          ? 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს'
          : '';
      break;
    case 'lastName':
      errorFlag =
        notEmpty && value.length <= 4
          ? 'სახელი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს'
          : '';
      break;
    case 'personalNumber':
      errorFlag =
        (notEmpty && value.length < 8) || value.length > 15
          ? 'პირადი ნომერი უნდა შეიცავდეს 8 დან 15 სიმბოლომდე'
          : '';
      break;
    case 'email':
      errorFlag =
        notEmpty && !validEmailRegex.test(value)
          ? 'გთხოვთ, შეიყვანოთ ელექტრონული ფოსტის მისამართი'
          : '';
      break;
    case 'userName':
      errorFlag =
        notEmpty && value.length <= 4
          ? 'მომხმარებლის სახელი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს'
          : '';
      break;
    case 'password':
      errorFlag =
        notEmpty && value.length <= 6
          ? 'პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან'
          : '';
      break;
    default:
      break;
  }
  return errorFlag;
};

export const validateForm = (data) => {
  let valid = Object.values(data).every((val) => {
    if (val.value.length > 0 && val.error === '') {
      return true;
    } else if (val.value === '' || val.error.length > 0) {
      return false;
    }
  });

  return valid;
};
