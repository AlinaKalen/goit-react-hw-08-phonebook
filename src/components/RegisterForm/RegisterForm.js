import { useDispatch } from 'react-redux';

import { register } from '../redux/authentication/AutOperations';
import { Link } from 'react-router-dom';

import { Notify } from 'notiflix';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name ..."
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter email ..."
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          placeholder="Enter password ..."
          required
        />
      </label>
      <button type="submit">Register</button>
      <Link to="/login">Have acount? LogIn</Link>
    </form>
  );
};

export default RegisterForm;