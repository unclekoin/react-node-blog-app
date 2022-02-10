import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

function Admin() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={() => signOut(() => navigate('/', { replace: true }))}>
        Log Out
      </button>
    </div>
  );
}

export default Admin;
