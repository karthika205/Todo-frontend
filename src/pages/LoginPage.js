// src/pages/LoginPage.js
import React from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { provider } from '../firebase';

function LoginPage({ setUser }) {
  const loginWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        localStorage.setItem("token", result._tokenResponse.idToken);
      })
      .catch((err) => alert("Login Failed"));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
}

export default LoginPage;
