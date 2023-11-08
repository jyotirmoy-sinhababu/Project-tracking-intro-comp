import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../assets/logo.svg';

const Nav = () => {
  return (
    <div className='flex justify-around p-[4%]'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div className='sm-hidden flex items-center gap-[59px] font-medium'>
        <div className='flex gap-[25px]'>
          <button>PRODUCT</button>
          <button>FEATURES</button>
          <button>PRICING</button>
        </div>
        <div>
          <button>LOGIN</button>
        </div>
      </div>
      <div className='hidden sm-flex'>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Nav;
