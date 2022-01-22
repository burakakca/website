import SocialMedia from '../components/SocialMedia';
import manOnTable from '../public/svgs/manOnTable.svg';

import React from 'react';
import Image from 'next/image';

const Greeting = () => {
  return (
    <main className='w-11/12 px-5 py-2.5 mx-auto' id='greeting'>
      <div className='items-center block mt-40 lg:flex'>
        <div className='flex-auto mb-7'>
          <div className='2k:mr-72 2xl:mr-12 md:mr-4'>
            <h1 className='flex justify-center my-5 text-3xl font-bold text-black dark:text-white lg:justify-start xl:text-5xl 2xl:text-7xl'>
              Hi all, I'm Burak
              <span className='ml-2 animate-waveEmoji'>👋</span>
            </h1>
            <p className='my-1 text-base text-center text-gray-400 dark:text-white lg:leading-9 xl:leading-10 lg:text-left lg:text-lg xl:text-2xl 2k:text-3xl'>
              A passionate Full Stack Software Developer having an experience of
              building Progressive Web Applications with JavaScript, Reactjs and
              some other cool libraries / frameworks.
            </p>
            <SocialMedia />
          </div>
        </div>
        <div className='flex md:h-auto'>
          <Image
            className='h-auto max-w-full'
            alt='man sitting on table'
            src={manOnTable}
          />
        </div>
      </div>
    </main>
  );
};
export default Greeting;
