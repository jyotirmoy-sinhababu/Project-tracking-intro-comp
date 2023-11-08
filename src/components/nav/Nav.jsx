import React from 'react';

import logo from '../../assets/logo.svg';

const Nav = () => {
  return (
    <div>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <div>
          <button>PRODUCT</button>
          <button>FEATURES</button>
          <button>PRICING</button>
        </div>
        <div>
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
