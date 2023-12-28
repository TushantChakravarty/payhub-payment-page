import React from 'react';

const SuccessPage = () => {
  return (
    <div style={{ padding: '60px', borderRadius: '4px', boxShadow: '0 2px 3px #C8D0D8', display: 'inline-block', margin: '0 auto', background: 'white' }}>
      <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
        <i className="checkmark" style={{ fontSize: '120px', lineHeight: '200px', marginLeft: '-15px', color: '#9ABC66' }}>✓</i>
      </div>
      <h1 style={{ color: '#88B04B', fontFamily: 'Nunito Sans, Helvetica Neue, sans-serif', fontWeight: 900, fontSize: '40px', marginBottom: '10px' }}>Success</h1>
      <p style={{ color: '#404F5E', fontFamily: 'Nunito Sans, Helvetica Neue, sans-serif', fontSize: '20px', margin: '0' }}>
        Your transaction is successful<br />
      </p>
    </div>
  );
};

export default SuccessPage;
