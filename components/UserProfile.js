import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please log in to see your profile.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logout} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-4 py-2">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
