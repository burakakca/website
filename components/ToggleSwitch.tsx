import ThemeContext from '../contexts/ThemeContext';

import React, { useContext, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Switch } from '@headlessui/react';

function ToggleSwitch() {
  const [switchValue, setSwitchValue] = useState(false);
  const themeContext = useContext(ThemeContext);
  return (
    <Switch.Group as='div' className='flex items-center space-x-4'>
      <Switch
        as='button'
        checked={switchValue}
        onChange={() => {
          themeContext.changeTheme();
          setSwitchValue(!switchValue);
        }}
        className={clsx(
          switchValue ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline'
        )}
      >
        {({ checked }) => (
          <span
            className={clsx(
              checked ? 'translate-x-5' : 'translate-x-0',
              'w-5 h-5 transition duration-200 ease-in-out transform bg-purple-900 rounded-full flex justify-center items-center'
            )}
          >
            {checked ? (
              <SunIcon className='text-yellow-300' />
            ) : (
              <MoonIcon className='text-white' />
            )}
          </span>
        )}
      </Switch>
    </Switch.Group>
  );
}

export default ToggleSwitch;
