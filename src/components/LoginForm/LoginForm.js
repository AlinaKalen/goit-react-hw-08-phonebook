import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../redux/authentication/AutOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(() => {
        Notify.failure('Incorrect login or password');
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          type="email"
          name="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter email ..."
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter password ..."
        />
      </label>
      <button type="submit">LogIn</button>
      <Link to="/register">Don`t have acount? Register</Link>
    </form>
  );
};

export default LoginForm;
// import { Notify } from 'notiflix';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../redux/authentication/AutOperations';

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     try {
//       await dispatch(logIn({ email, password }));
//       Notify.success('Login successful');
//       navigate('/');  
//     } catch (error) {
//       Notify.failure('Incorrect login or password');
//     }

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Email
//         <input
//           type="email"
//           name="email"
//           pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
//           title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
//           required
//           placeholder="Enter email ..."
//         />
//       </label>
//       <label>
//         Password
//         <input
//           type="password"
//           name="password"
//           pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
//           title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
//           required
//           placeholder="Enter password ..."
//         />
//       </label>
//       <button type="submit">LogIn</button>
//       <Link to="/register">Don't have an account? Register</Link>
//     </form>
//   );
// };

// export default LoginForm;
