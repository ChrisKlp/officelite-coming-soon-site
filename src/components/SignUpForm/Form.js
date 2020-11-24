import FormTemplate from 'components/SignUpForm/FormTemplate';
import { useState } from 'react';

const Form = ({ validate, initialValues }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    const { [name]: removedError, ...rest } = errors;
    const error = validate[name](value);

    setErrors({ ...rest, [name]: error });
  };

  const handleSelectChange = (label, price) => {
    setValues({ ...values, options: { label, price } });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { options, ...rest } = values;

    const formValidation = Object.keys({ ...rest }).reduce((acc, key) => {
      const newError = validate[key](values[key]);

      return {
        ...acc,
        [key]: newError,
      };
    }, {});

    setErrors(formValidation);

    const clearValue = Object.keys({ ...rest }).reduce(
      (acc, key) => {
        return {
          ...acc,
          [key]: '',
        };
      },
      {
        ...rest,
      }
    );

    if (Object.values(formValidation).every(error => error === false)) {
      alert(JSON.stringify(values, null, 5));
      setValues({ ...values, ...clearValue });
      e.target.reset();
    }
  };

  return (
    <>
      <FormTemplate
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSelectChange={handleSelectChange}
        errors={errors}
        values={values}
      />
    </>
  );
};

export default Form;
