import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const provider = new GoogleAuthProvider();

function LoginButton() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('登入失敗:', error);
    }
  };

  return <button onClick={handleLogin}>用 Google 登入</button>;
}

export default LoginButton;
