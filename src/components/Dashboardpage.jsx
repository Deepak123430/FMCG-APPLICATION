import React from 'react';

const DashboardPage = ({ setCurrentPage, setIsLoggedIn, pantryItems, notifications, currentUser, isAdmin }) => {
  
  const lowStockItems = pantryItems.filter(item => item.stock < 3);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed', padding: '20px' }}>
      {/* Header */}
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
        gap: '15px'
      }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            📊 Dashboard
          </h1>
          <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
            Welcome, {currentUser?.username || 'Guest'}!
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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
              fontSize: '14px'
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              setIsLoggedIn();
              setCurrentPage('home');
            }}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Quick Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            color: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 10px 0' }}>Pantry Items</p>
            <p style={{ fontSize: '40px', fontWeight: 'bold', margin: 0 }}>{pantryItems.length}</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            color: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 10px 0' }}>Low Stock Alert</p>
            <p style={{ fontSize: '40px', fontWeight: 'bold', margin: 0 }}>{lowStockItems.length}</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 10px 0' }}>Notifications</p>
            <p style={{ fontSize: '40px', fontWeight: 'bold', margin: 0 }}>{notifications.length}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '20px'
        }}>
          {/* Low Stock Items */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '25px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              ⚠️ Low Stock Alert
            </h2>
            {lowStockItems.length === 0 ? (
              <p style={{ color: '#6b7280', textAlign: 'center', padding: '20px' }}>
                All items are well stocked! ✅
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {lowStockItems.map(item => (
                  <div key={item.id} style={{
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    padding: '15px',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <p style={{ fontWeight: '600', color: '#1f2937', margin: '0 0 5px 0' }}>
                        {item.name}
                      </p>
                      <p style={{ fontSize: '12px', color: '#dc2626', margin: 0 }}>
                        Only {item.stock} left in stock!
                      </p>
                    </div>
                    <button
                      onClick={() => setCurrentPage('groceries')}
                      style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        border: 'none',
                        padding: '8px 15px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Restock
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Notifications */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '25px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              🔔 Recent Notifications
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {notifications.map(notification => (
                <div key={notification.id} style={{
                  backgroundColor: '#f0f9ff',
                  border: '1px solid #bae6fd',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <p style={{ color: '#1f2937', margin: 0, fontSize: '14px' }}>
                    {notification.message}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage('notifications')}
              style={{
                marginTop: '15px',
                width: '100%',
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              View All Notifications
            </button>
          </div>

          {/* Quick Actions */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            padding: '25px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              ⚡ Quick Actions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => setCurrentPage('groceries')}
                style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                🛒 Shop Groceries
              </button>
              <button
                onClick={() => setCurrentPage('pantry')}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                📦 View Pantry
              </button>
              <button
                onClick={() => setCurrentPage('orders')}
                style={{
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                📋 My Orders
              </button>
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '25px',
          marginTop: '20px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#1f2937'
          }}>
            👤 Account Information
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <div style={{ padding: '15px', backgroundColor: '#fff7ed', borderRadius: '8px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 5px 0' }}>Username</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                {currentUser?.username || 'Guest'}
              </p>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#fff7ed', borderRadius: '8px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 5px 0' }}>Email</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                {currentUser?.email || 'Not available'}
              </p>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#fff7ed', borderRadius: '8px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 5px 0' }}>Account Type</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                {isAdmin ? '🔐 Administrator' : '👤 Regular User'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;