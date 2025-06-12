import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function UserStatus() {
  const { user, loading } = useContext(AuthContext);
  console.log('user, loading:', user, loading);

  if (loading) return <div>載入中...</div>;

  return (
    <div>
      {user ? `歡迎，${user.displayName}` : '請登入'}
    </div>
  );
}

export default UserStatus;
