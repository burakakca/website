import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export default function stackoverflow({ className }: Props) {
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
        x1='47'
        x2='47'
        y1='-1736.5'
        y2='-1741.639'
        gradientTransform='matrix(1 0 0 -1 0 -1698)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <path
        fill='url(#a)'
        d='M52 42c0 .551-.449 1-1 1h-8c-.551 0-1-.449-1-1v-2c0-.551.449-1 1-1h8c.551 0 1 .449 1 1v2z'
      />
      <linearGradient
        id='b'
        x1='47'
        x2='47'
        y1='-1746.5'
        y2='-1751.639'
        gradientTransform='matrix(1 0 0 -1 0 -1698)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <path
        fill='url(#b)'
        d='M52 52c0 .551-.449 1-1 1h-8c-.551 0-1-.449-1-1v-2c0-.551.449-1 1-1h8c.551 0 1 .449 1 1v2z'
      />
      <linearGradient
        id='c'
        x1='14'
        x2='14'
        y1='7.255'
        y2='56.808'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <circle cx='14' cy='41' r='2' fill='url(#c)' />
      <linearGradient
        id='d'
        x1='20'
        x2='20'
        y1='7.255'
        y2='56.808'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <circle cx='20' cy='41' r='2' fill='url(#d)' />
      <linearGradient
        id='e'
        x1='26'
        x2='26'
        y1='7.255'
        y2='56.808'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <circle cx='26' cy='41' r='2' fill='url(#e)' />
      <linearGradient
        id='f'
        x1='32'
        x2='32'
        y1='7.255'
        y2='56.808'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <path
        fill='url(#f)'
        d='M56 37.952c0-.298-.138-.862-.14-.868l-5.209-26.123A5.023 5.023 0 0045.761 7H18.238c-2.345 0-4.402 1.665-4.893 3.972l-5.206 26.13a2.92 2.92 0 00-.139.85v6.096c0 .751.291 1.43.755 1.952A2.93 2.93 0 008 47.952v6.096A2.955 2.955 0 0010.952 57h42.097A2.955 2.955 0 0056 54.048v-6.096c0-.751-.291-1.431-.755-1.952A2.93 2.93 0 0056 44.048v-6.096zM10.993 33H28v-2H11.391l.399-2H23v-2H12.189l.399-2H21v-2h-8.014l.399-2H19v-2h-5.216l1.52-7.625A3.015 3.015 0 0118.238 9h27.523c1.408 0 2.642 1 2.932 2.364l4.72 23.673c-.121-.015-.24-.037-.365-.037H10.952c-.125 0-.244.022-.365.037L10.993 33zM54 54.048a.953.953 0 01-.952.952H10.952a.953.953 0 01-.952-.952v-6.096c0-.525.427-.952.952-.952h42.097c.524 0 .951.427.951.952v6.096zm0-10a.953.953 0 01-.952.952H10.952a.953.953 0 01-.952-.952v-6.096c0-.525.427-.952.952-.952h42.097c.524 0 .951.427.951.952v6.096z'
      />
      <linearGradient
        id='g'
        x1='14'
        x2='14'
        y1='7.255'
        y2='56.808'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <circle cx='14' cy='51' r='2' fill='url(#g)' />
      <linearGradient
        id='h'
        x1='20'
        x2='20'
        y1='7.255'
        y2='56.808'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <circle cx='20' cy='51' r='2' fill='url(#h)' />
      <linearGradient
        id='i'
        x1='26'
        x2='26'
        y1='7.255'
        y2='56.808'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <circle cx='26' cy='51' r='2' fill='url(#i)' />
    </svg>
  );
}
