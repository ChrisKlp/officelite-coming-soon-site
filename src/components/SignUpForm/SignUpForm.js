import Form from 'components/SignUpForm/Form';

const textValidation = fieldValue => {
  if (
    fieldValue.trim() === '' ||
    /[^a-zA-Z -]/.test(fieldValue) ||
    fieldValue.trim().length < 3
  ) {
    return true;
  }
  return false;
};

const emailValidation = email => {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!re.test(email) || email.trim() === '') {
    return true;
  }
  return false;
};

const phoneValidation = phone => {
  if (phone.trim() === '' || /[^+0-9]/.test(phone) || phone.trim().length < 9) {
    return true;
  }
  return false;
};

const validate = {
  name: textValidation,
  email: emailValidation,
  phone: phoneValidation,
  company: textValidation,
};

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  options: {
    label: 'Basic Pack',
    price: 'Free',
  },
};

const SignUpForm = () => {
  return <Form validate={validate} initialValues={initialValues} />;
};

export default SignUpForm;
