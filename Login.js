import React, { useState } from 'react';
import './Login1.css';
import { useNavigate } from 'react-router-dom'; // Ensure that you import from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  if (auth) {
    navigate("/singup")
  }

  const [data, setData] = useState({
    userId: '',
    password: ''
  });

  const { userId, password } = data;

  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+[0-9]@+[^\s@]+\.[^\s@]+$/;
    const isPasswordValid = password.length < 8;

    if (!emailRegex.test(userId)) {
      alert('Please enter a valid email address');
    } else if (isPasswordValid) {
      alert('Password must be at least 8 characters long');
    } else {
      alert('Form submitted successfully');
      console.log('Data:', data);

      setData({
        userId: '',
        password: ''
      });
    }
  };

  return (
    <div className='card'>
      <div>
        <form onSubmit={submitHandler}>
          <div className='card-form'>
            <img src="https://img.freepik.com/premium-vector/love-online-shopping-log_169798-1406.jpg" alt='' />
            <label>Enter your mail id :</label>
            <input type='email' placeholder='enter your mail' value={userId} name='userId' onChange={handler} />
          </div>
          <div className="card-form">
            <label>Enter password :</label>
            <input type='password' placeholder='enter your password' value={password} name='password' onChange={handler} />
          </div>
          <div className='card-form'>
            <input type='submit' name='submit' />
          </div>
          <div className="extra">
            <div className='forget'>forget password ?</div>
            <div className='sing' onClick={() => navigate('/singup')}>sing up</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
