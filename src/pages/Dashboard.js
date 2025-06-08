// src/pages/Dashboard.js
import React from 'react';

function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome {user.displayName}</h2>
      <p>Your todo list will appear here.</p>
    </div>
  );
}

export default Dashboard;
