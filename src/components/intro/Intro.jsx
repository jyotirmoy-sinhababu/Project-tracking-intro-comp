import React from 'react';

import desktop from '../../assets/desktop.svg';

const Intro = () => {
  return (
    <div className='flex pl-[20%] pt-[6%] gap-[9%]'>
      {' '}
      <div>
        <div className='flex gap-2'>
          <div className='border flex justify-center w-[67px] rounded-2xl'>
            <p className=''>NEW</p>
          </div>
          <p>MONOGRAPH DASHBOARD</p>
        </div>
        <div>
          <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
          <p>Project planning and time tracking for agile teams</p>
        </div>
        <div>
          <button>SCHEDULE A DEMO</button>
          <button>TO SEE A PREVIEW</button>
        </div>
      </div>
      <div>
        <img src={desktop} alt='desktop picture' />
      </div>
    </div>
  );
};

export default Intro;
