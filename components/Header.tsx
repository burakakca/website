// import ThemeContext from '../contexts/ThemeContext';
import XIcon from '../components/icons/xicon';
import MenuIcon from '../components/icons/menu';

import React, { useContext, useState } from 'react';
// import clsx from 'clsx';
import ToggleSwitch from './ToggleSwitch';

const Header = () => {
  // const { isDark } = useContext(ThemeContext);
  // const viewExperience = workExperiences.display;
  // const viewOpenSource = openSource.display;
  // const viewSkills = skillsSection.display;
  // const viewBlog = blogSection.display;
  // const viewContact = openSource.display;

  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header
    //   className={clsx(
    //     isDark ? 'bg-theme-dark' : 'bg-white',
    //     'text-sm lg:text-base lg:flex lg:items-center lg:justify-between items-center w-full px-4 py-5 mx-auto'
    //   )}
    // >
    <header className='items-center w-full px-4 py-5 mx-auto text-sm lg:text-base lg:flex lg:items-center lg:justify-between'>
      <a
        href='/'
        className='flex-none block float-left text-2xl leading-normal no-underline'
      >
        <span className='text-gray-500'> &lt;</span>
        <span className='font-agustina font-bold py-2.5 text-purple-700 dark:text-white'>
          Burak Akça
        </span>
        <span className='text-gray-500'>/&gt;</span>
      </a>
      <div className='relative inline-block float-right cursor-pointer lg:hidden'>
        <button
          type='button'
          className='inline-flex items-center justify-center p-2 text-purple-700 rounded-md dark:text-white hover:text-purple-700 hover:bg-pink-50 dark:hover:bg-purple-700 dark:hover:text-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          aria-controls='mobile-menu'
          aria-expanded='false'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='sr-only'>Open main menu</span>

          <MenuIcon />
        </button>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 z-20 bg-black bg-opacity-25 dark:bg-white dark:bg-opacity-5 lg:hidden'
          aria-hidden='true'
        ></div>
      )}
      {isOpen && (
        <div className='absolute top-0 right-0 z-30 w-full p-2 transition origin-top transform max-w-none lg:hidden'>
          <div className='bg-white divide-y divide-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-900 dark:divide-pink-50'>
            <div className='pt-3 pb-2'>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <span className='text-gray-500'> &lt;</span>
                  <span className='font-agustina font-bold py-2.5 text-purple-700 dark:text-white'>
                    Burak Akça
                  </span>
                  <span className='text-gray-500'>/&gt;</span>
                </div>
                <div className='-mr-2'>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type='button'
                    className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:bg-gray-800 dark:text-pink-50 dark:hover:text-purple-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
                  >
                    <span className='sr-only'>Close menu</span>
                    <XIcon />
                  </button>
                </div>
              </div>
              <div className='px-2 mt-3 space-y-1'>
                <a
                  href='#whatido'
                  className='block px-3 py-2 text-base font-medium text-gray-900 transition-colors rounded-md dark:text-white hover:bg-pink-50 dark:hover:text-pink-50 dark:hover:bg-purple-700'
                >
                  What I Do
                </a>
                <a
                  href='#opensource'
                  className='block px-3 py-2 text-base font-medium text-gray-900 transition-colors rounded-md dark:text-white hover:bg-pink-50 dark:hover:text-pink-50 dark:hover:bg-purple-700'
                >
                  Open Source
                </a>
              </div>
            </div>
            <div className='pt-4 pb-2'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img
                    className='w-10 h-10 rounded-full'
                    src='https://avatars.githubusercontent.com/u/56919004?s=460&u=0992e1322f4b32628cfb5a5cd17ff6cee021963a&v=4'
                    alt='burakakca-github'
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800 dark:text-white'>
                    Burak Akça
                  </div>
                </div>
                <div className='flex-shrink-0 p-1 ml-auto'>
                  <ToggleSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <nav>
        {/* <ul
          className={clsx(
            isDark ? 'bg-theme-dark text-white clear-both' : 'clear-both',
            'm-0 p-0 list-none hidden lg:flex justify-between'
          )}
        > */}
        <ul className='justify-between hidden clear-both p-0 m-0 list-none lg:flex'>
          <li>
            <a
              className='block px-4 py-5 no-underline transition-colors hover:bg-pink-100 dark:hover:text-pink-50 dark:hover:bg-purple-700'
              href='#whatido'
            >
              What I Do
            </a>
          </li>
          <li>
            <a
              className='block px-4 py-5 no-underline transition-colors hover:bg-pink-100 dark:hover:text-pink-50 dark:hover:bg-purple-700'
              href='#opensource'
            >
              Open Source
            </a>
          </li>

          <li>
            <span className='block px-4 py-5 no-underline transition-colors hover:bg-pink-100 dark:hover:text-pink-50 dark:hover:bg-purple-700'>
              <ToggleSwitch />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
