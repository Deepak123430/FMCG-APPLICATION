import React, { useState } from 'react';

const SignInPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const user = users.find(
      u => u.email === formData.email && u.password === formData.password
    );

    if (!user) {
      setError('Invalid email or password!');
      return;
    }

    const userSession = { 
      id: user.id, 
      username: user.username, 
      email: user.email,
      role: user.role || 'user'
    };
    
    setIsLoggedIn(userSession);
    
    alert(`Welcome back, ${user.username}!`);
    setCurrentPage('home');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '500px',
        width: '100%',
        padding: '50px'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '15px',
          textAlign: 'center'
        }}>
          Welcome Back! 👋
        </h2>
        <p style={{
          color: '#6b7280',
          textAlign: 'center',
          marginBottom: '35px',
          fontSize: '18px'
        }}>
          Sign in to access your account
        </p>

        {error && (
          <div style={{
            backgroundColor: '#fee2e2',
            border: '1px solid #fca5a5',
            color: '#991b1b',
            padding: '14px',
            borderRadius: '8px',
            marginBottom: '25px',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              color: '#374151',
              fontWeight: '600',
              marginBottom: '10px',
              fontSize: '16px'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
              style={{
                width: '100%',
                padding: '14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '18px',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#c2410c'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              color: '#374151',
              fontWeight: '600',
              marginBottom: '10px',
              fontSize: '16px'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '14px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '18px',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#c2410c'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)',
              color: 'white',
              padding: '16px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '25px'
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '16px'
        }}>
          Don't have an account?{' '}
          <button
            onClick={() => setCurrentPage('signup')}
            style={{
              color: '#c2410c',
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '16px'
            }}
          >
            Sign Up
          </button>
        </p>

        <button
          onClick={() => setCurrentPage('home')}
          style={{
            width: '100%',
            marginTop: '20px',
            backgroundColor: '#f3f4f6',
            color: '#374151',
            padding: '14px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default SignInPage;