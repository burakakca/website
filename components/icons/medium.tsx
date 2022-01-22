import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export default function medium({ className }: Props) {
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
        y1='542.25'
        y2='590.76'
        gradientTransform='translate(0 -534)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#1a6dff' />
        <stop offset='1' stopColor='#c822ff' />
      </linearGradient>
      <path
        fill='url(#a)'
        d='M51 56H13c-2.757 0-5-2.243-5-5V13c0-2.757 2.243-5 5-5h38c2.757 0 5 2.243 5 5v38c0 2.757-2.243 5-5 5zM13 10c-1.654 0-3 1.346-3 3v38c0 1.654 1.346 3 3 3h38c1.654 0 3-1.346 3-3V13c0-1.654-1.346-3-3-3H13z'
      />
      <linearGradient
        id='b'
        x1='32'
        x2='32'
        y1='19.092'
        y2='45.092'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#6dc7ff' />
        <stop offset='1' stopColor='#e6abff' />
      </linearGradient>
      <path
        fill='url(#b)'
        d='M44.973 22.703l2.768-2.334c.513-.433.211-1.276-.457-1.276h-8.022l-6.774 16.448-7.504-16.449h-8.27c-.636 0-.954.778-.505 1.233l3.065 3.101V40.76l-2.855 4.333h8.566l-2.855-4.334V27.036l6.425 18.056h3.569l7.139-18.056v15.167l-2.855 2.889H47.83l-2.855-2.889v-19.5h-.002z'
      />
    </svg>
  );
}
