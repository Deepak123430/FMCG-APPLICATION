import React, { useState, useEffect } from 'react';

const SignUpPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  // ✅ Pre-register default admin and user accounts
  useEffect(() => {
    const initializeAccounts = () => {
      let users = JSON.parse(localStorage.getItem('users') || '[]');

      const accountsToCreate = [
        {
          username: 'ravideepakthumu',
          email: 'ravideepakthumu@gmail.com',
          password: 'admin123',
          role: 'admin'
        },
        {
          username: 'deepaknaidu',
          email: 'deepaknaidu8790@gmail.com',
          password: 'user123',
          role: 'user'
        }
      ];

      let accountsCreated = false;

      accountsToCreate.forEach(acc => {
        const exists = users.some(u => u.email === acc.email);
        if (!exists) {
          users.push({
            id: Date.now() + Math.random(),
            ...acc,
            createdAt: new Date().toISOString()
          });
          accountsCreated = true;
        }
      });

      if (accountsCreated) {
        localStorage.setItem('users', JSON.stringify(users));
        console.log('✅ Pre-registered accounts created!');
      }
    };

    initializeAccounts();
  }, []);

  // ✅ Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(
      u => u.username === formData.username || u.email === formData.email
    );

    if (userExists) {
      setError('Username or email already exists!');
      return;
    }

    const newUser = {
      id: Date.now(),
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: 'user',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const userSession = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role
    };

    setIsLoggedIn(userSession);
    alert('Account created successfully! Welcome 🎉');
    setCurrentPage('home');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          maxWidth: '500px',
          width: '100%',
          padding: '50px'
        }}
      >
        <h2
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '15px',
            textAlign: 'center'
          }}
        >
          Create Account 🚀
        </h2>

        <p
          style={{
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: '35px',
            fontSize: '18px'
          }}
        >
          Join us today!
        </p>

        {error && (
          <div
            style={{
              backgroundColor: '#fee2e2',
              border: '1px solid #fca5a5',
              color: '#991b1b',
              padding: '14px',
              borderRadius: '8px',
              marginBottom: '25px',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {['username', 'email', 'password', 'confirmPassword'].map((field) => (
            <div key={field} style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  color: '#374151',
                  fontWeight: '600',
                  marginBottom: '10px',
                  fontSize: '16px'
                }}
              >
                {field === 'confirmPassword'
                  ? 'Confirm Password'
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={
                  field === 'password' || field === 'confirmPassword'
                    ? 'password'
                    : field === 'email'
                    ? 'email'
                    : 'text'
                }
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                required
                minLength={field.includes('password') ? 6 : undefined}
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '18px',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#c2410c')}
                onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
          ))}

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
            Create Account
          </button>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '16px'
          }}
        >
          Already have an account?{' '}
          <button
            onClick={() => setCurrentPage('signin')}
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
            Sign In
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

export default SignUpPage;
