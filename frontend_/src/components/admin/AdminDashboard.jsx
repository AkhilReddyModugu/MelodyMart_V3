import React from 'react';
import Products from './Products';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Here you can manage the entire application.</p>
      <Products/>
    </div>
  );
};

export default AdminDashboard;