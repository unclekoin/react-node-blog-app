import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/use-auth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name: <input type="text" name="username" />
        </label>
        <button>Submit</button>
      </form>
      <div>From page: {fromPage}</div>
    </div>
  );
};

export default Login;
