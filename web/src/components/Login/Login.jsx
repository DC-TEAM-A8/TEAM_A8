import React, { useState } from 'react';
import './Login.css';

export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('受講生ID:', username);
    console.log('パスワード:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="username">受講生ID</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">ログイン</button>
      </form>
      <div className="links">
        <a href="#register">新規登録はこちら</a>
        <a href="#admin">講師専用画面はこちら</a>
      </div>
    </div>
  );
};

export default Login;


// /**
//  * @typedef {object} ILoginProps
//  * @property {string} [className]
//  * @param { ILoginProps } props
//  */
