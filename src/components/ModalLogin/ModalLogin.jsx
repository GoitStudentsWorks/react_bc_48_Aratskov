import BackdropModal from 'components/BackdropModal/BackdropModal';
import { Form } from 'components/Form/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'redux/Auth/authOperations';

const ModalLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = form => {
    dispatch(loginUser(form));
  };
  return (
    <BackdropModal closeModal={() => navigate('/')}>
      <Form title={'Log in'} titleBtn={'Log In'} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
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

export default ModalLogin;
