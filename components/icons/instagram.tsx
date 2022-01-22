import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export default function instagram({ className }: Props) {
  return (
    <svg
      className={clsx(
        'flex self-center w-10 h-10 mx-auto 2k:w-12 2k:h-12',
        className
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      width='40'
      height='40'
    >
      <linearGradient
        id='a'
        x1='32'
        x2='32'
        y1='6.667'
        y2='57.872'
        gradientUnits='userSpaceOnUse'
        spreadMethod='reflect'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <path
        fill='url(#a)'
        d='M44 57H20c-7.168 0-13-5.832-13-13V20c0-7.168 5.832-13 13-13h24c7.168 0 13 5.832 13 13v24c0 7.168-5.832 13-13 13zM20 9C13.935 9 9 13.935 9 20v24c0 6.065 4.935 11 11 11h24c6.065 0 11-4.935 11-11V20c0-6.065-4.935-11-11-11H20z'
      />
      <linearGradient
        id='b'
        x1='32'
        x2='32'
        y1='18.167'
        y2='45.679'
        gradientUnits='userSpaceOnUse'
        spreadMethod='reflect'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <path
        fill='url(#b)'
        d='M32 45c-7.168 0-13-5.832-13-13s5.832-13 13-13 13 5.832 13 13-5.832 13-13 13zm0-22c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9z'
      />
      <linearGradient
        id='c'
        x1='46'
        x2='46'
        y1='12.75'
        y2='23.049'
        gradientUnits='userSpaceOnUse'
        spreadMethod='reflect'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <path fill='url(#c)' d='M46 15a3 3 0 100 6 3 3 0 100-6z' />
    </svg>
  );
}
