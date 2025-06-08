// src/App.js
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <LoginPage setUser={setUser} />
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;
