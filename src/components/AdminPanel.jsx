import React, { useState } from 'react';

const AdminPanel = ({ setCurrentPage, currentUser, setIsLoggedIn }) => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users') || '[]'));
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  const toggleAdminRole = (userId) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const newRole = user.role === 'admin' ? 'user' : 'admin';
        return { ...user, role: newRole };
      }
      return user;
    });
    
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('User role updated successfully!');
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('currentUser');
      setIsLoggedIn(null);
      setCurrentPage('home');
      window.location.reload();
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed', padding: '20px' }}>
      {/* Header with Navigation Buttons */}
      <div style={{ 
        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        color: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            🔐 Admin Dashboard
          </h1>
          <p style={{ margin: '5px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
            Logged in as: {currentUser?.email}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              backgroundColor: 'white',
              color: '#f97316',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🏠 Back to Home
          </button>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Statistics Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 10px 0' }}>Total Users</p>
            <p style={{ fontSize: '48px', fontWeight: 'bold', margin: 0 }}>{users.length}</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 10px 0' }}>Total Orders</p>
            <p style={{ fontSize: '48px', fontWeight: 'bold', margin: 0 }}>{orders.length}</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 10px 0' }}>Total Revenue</p>
            <p style={{ fontSize: '48px', fontWeight: 'bold', margin: 0 }}>
              ₹{orders.reduce((sum, order) => sum + (order.total || 0), 0).toFixed(0)}
            </p>
          </div>
        </div>

        {/* Users Table */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '30px'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#1f2937'
          }}>
            Registered Users Management
          </h2>

          {users.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>👤</div>
              <p style={{ fontSize: '18px', marginBottom: '10px' }}>No users registered yet</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f97316', color: 'white' }}>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>ID</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>Username</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>Email</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>Password</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>Role</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>Joined Date</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>Orders</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontSize: '14px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    const userOrders = orders.filter(order => order.userId === user.id).length;
                    
                    return (
                      <tr 
                        key={user.id}
                        style={{ borderBottom: '1px solid #e5e7eb' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fff7ed'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <td style={{ padding: '15px', color: '#6b7280', fontSize: '14px' }}>
                          #{index + 1}
                        </td>
                        <td style={{ padding: '15px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                              width: '35px',
                              height: '35px',
                              backgroundColor: '#fed7aa',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#f97316',
                              fontWeight: 'bold',
                              fontSize: '14px'
                            }}>
                              {user.username.charAt(0).toUpperCase()}
                            </div>
                            <span style={{ fontWeight: '500', color: '#1f2937' }}>
                              {user.username}
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: '15px', color: '#6b7280', fontSize: '14px' }}>
                          {user.email}
                        </td>
                        <td style={{ padding: '15px' }}>
                          <span style={{
                            backgroundColor: '#fef3c7',
                            color: '#92400e',
                            padding: '5px 12px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            fontFamily: 'monospace',
                            fontWeight: '600'
                          }}>
                            {user.password || '********'}
                          </span>
                        </td>
                        <td style={{ padding: '15px' }}>
                          <span style={{
                            backgroundColor: user.role === 'admin' ? '#fef3c7' : '#dbeafe',
                            color: user.role === 'admin' ? '#92400e' : '#1e40af',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: '600',
                            textTransform: 'capitalize'
                          }}>
                            {user.role || 'user'}
                          </span>
                        </td>
                        <td style={{ padding: '15px', color: '#6b7280', fontSize: '14px' }}>
                          {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          }) : 'N/A'}
                        </td>
                        <td style={{ padding: '15px' }}>
                          <span style={{
                            backgroundColor: '#dbeafe',
                            color: '#1e40af',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}>
                            {userOrders} orders
                          </span>
                        </td>
                        <td style={{ padding: '15px' }}>
                          {user.email !== currentUser.email && (
                            <button
                              onClick={() => toggleAdminRole(user.id)}
                              style={{
                                backgroundColor: user.role === 'admin' ? '#dc2626' : '#f97316',
                                color: 'white',
                                border: 'none',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                              }}
                            >
                              {user.role === 'admin' ? 'Remove Admin' : 'Make Admin'}
                            </button>
                          )}
                          {user.email === currentUser.email && (
                            <span style={{ 
                              color: '#f97316', 
                              fontSize: '12px', 
                              fontWeight: 'bold' 
                            }}>
                              (You)
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Info Box */}
          <div style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#dbeafe',
            border: '1px solid #93c5fd',
            borderRadius: '8px'
          }}>
            <p style={{ fontSize: '14px', color: '#1e40af', margin: 0 }}>
              <strong>💡 Admin Features:</strong> You can view all user passwords  and promote/demote users to admin role. Click "Back to Home" to access all features or "Logout" to sign out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;