import React from 'react';
import liderLogo from '../../assets/logo.png';

const Logo = (props) => (
  <div style={{ width: '225px', height: '25px' }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src={liderLogo}
      alt="Lider-bet Logo"
    />
  </div>
);

export default Logo;
