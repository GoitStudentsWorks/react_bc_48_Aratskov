import BackdropModal from 'components/BackdropModal/BackdropModal';
import { Form } from 'components/Form/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/Auth/authOperations';

const ModalRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = form => {
    console.log(form);
    dispatch(registerUser(form));
  };
  return (
    <BackdropModal closeModal={() => navigate('/')}>
      <Form title={'Registration'} titleBtn={'Sign In'} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your email"
          />
        </label>
      </Form>
    </BackdropModal>
  );
};

export default ModalRegister;
