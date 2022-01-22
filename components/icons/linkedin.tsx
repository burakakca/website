import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export default function linkedin({ className }: Props) {
  return (
    <svg
      className={clsx('flex self-center mx-auto 2k:w-12 2k:h-12', className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      width='40'
      height='40'
    >
      <linearGradient
        id='a'
        x1='32'
        x2='32'
        y1='6'
        y2='58'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <path
        fill='url(#a)'
        d='M32 58C17.664 58 6 46.337 6 32 6 17.664 17.664 6 32 6s26 11.664 26 26c0 14.337-11.664 26-26 26zm0-50C18.767 8 8 18.767 8 32s10.767 24 24 24 24-10.767 24-24S45.233 8 32 8z'
      />
      <linearGradient
        id='b'
        x1='21.922'
        x2='22.081'
        y1='25.872'
        y2='44.462'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <path fill='url(#b)' d='M19 26h6v18h-6z' />
      <linearGradient
        id='c'
        x1='22.474'
        x2='22.527'
        y1='17.966'
        y2='24.145'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <ellipse cx='22.5' cy='21' fill='url(#c)' rx='3.5' ry='3' />
      <linearGradient
        id='d'
        x1='38.077'
        x2='37.922'
        y1='25.983'
        y2='44.076'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <path
        fill='url(#d)'
        d='M40 26h-.53c-2.187 0-4 1.572-4.387 3.647H35V26h-6v18h6V33.883a8.63 8.63 0 01.084-1.06A2.996 2.996 0 0141 33.5V44h6V33a7 7 0 00-7-7z'
      />
    </svg>
  );
}
