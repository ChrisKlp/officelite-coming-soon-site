import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: grid;
  width: min(100%, 44.5rem);
  padding: 0.7rem 2.4rem 2.4rem;
  background: ${({ theme }) => theme.colorWhite};
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);
  border-radius: 1.3rem;
  
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 1.6rem 4.3rem 5.1rem;
  }
`;

const InputsWrapper = styled.div`
  display: grid;
  gap: 0.7rem;
  margin-bottom: 4rem;
`;

const FormTemplate = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  handleSelectChange,
}) => {
  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off" noValidate>
      <InputsWrapper>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          values={values.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email Adress"
          values={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Select
          changeFn={handleSelectChange}
          values={values.options}
          options={[
            { label: 'Basic Pack', price: 'Free' },
            { label: 'Pro Pack', price: '$9.99' },
            { label: 'Ultimate Pack', price: '$19.99' },
          ]}
        ></Select>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          values={values.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
        <Input
          type="text"
          name="company"
          placeholder="Company"
          values={values.company}
          onChange={handleChange}
          error={errors.company}
          required
        />
      </InputsWrapper>
      <Button size="100%">Get on the list</Button>
    </FormWrapper>
  );
};

export default FormTemplate;
