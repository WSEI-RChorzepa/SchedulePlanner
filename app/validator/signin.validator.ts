import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().trim().min(8).required(),
});
