import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../assets/logo.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenFn = () => {
    !isOpen ? setIsOpen(!isOpen) : setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      {' '}
      <div className='flex lg:justify-around lg:p-[4%] justify-between p-[7%] items-center'>
        <div>
          <img src={logo} alt='logo' />
        </div>
        <div className=' lg:flex items-center gap-[59px] font-medium hidden '>
          <div className='flex gap-[25px]'>
            <button>PRODUCT</button>
            <button>FEATURES</button>
            <button>PRICING</button>
          </div>
          <div>
            <button>LOGIN</button>
          </div>
        </div>
        <div
          onClick={() => {
            handleIsOpenFn();
          }}
          className='lg:hidden text-3xl'
        >
          <GiHamburgerMenu />
        </div>
      </div>
      {isOpen ? (
        <div className='flex justify-center items-center '>
          <div className='flex flex-col gap-[22px] border w-[320px] h-[260px] justify-center items-center z-20  fixed top-[12%] bg-white'>
            <div className='flex flex-col gap-[9px] border-b-2 w-[270px] pb-[15px]'>
              <button className='text-xl font-bold'>PRODUCT</button>
              <button className='text-xl font-bold'>FEATURES</button>
              <button className='text-xl font-bold'>PRICING</button>
            </div>
            <div className='flex justify-center'>
              <button>LOGIN</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Nav;
