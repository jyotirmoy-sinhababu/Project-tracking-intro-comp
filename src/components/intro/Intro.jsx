import React from 'react';

import desktop from '../../assets/desktop.svg';

const Intro = () => {
  return (
    <div className='flex  p-[4%] lg:pl-[20%] pt-[6%] gap-[9%] lg:flex-row flex-col-reverse'>
      {' '}
      <div className='flex flex-col  '>
        <div className='flex gap-2 '>
          <div className='border flex justify-center items-center text-[13px] font-medium h-[26px] w-[67px] rounded-2xl bg-slate-900'>
            <p className='text-white'>NEW</p>
          </div>
          <p className='font-barlow text-[17px]'>MONOGRAPH DASHBOARD</p>
        </div>
        <div className='flex flex-col gap-[27px] py-[1%]'>
          <p className='text-[42px] font-bold font-barlow'>
            POWERFUL INSIGHTS INTO YOUR TEAM
          </p>
          <p className='font-barlow text-xl'>
            Project planning and time tracking for agile teams
          </p>
        </div>
        <div className='flex gap-[11%] pt-[29px] '>
          <button className='font-barlow border flex justify-center text-white items-center w-[200px] h-[49px] bg-red-0'>
            SCHEDULE A DEMO
          </button>
          <button className='font-barlow'>TO SEE A PREVIEW</button>
        </div>
      </div>
      <div>
        <img src={desktop} alt='desktop picture' />
      </div>
    </div>
  );
};

export default Intro;
