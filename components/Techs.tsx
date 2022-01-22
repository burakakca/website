import React from 'react';
import Image from 'next/image';

import {
  apollo,
  babel,
  css3,
  firebase,
  git,
  graphql,
  html5,
  javascript,
  nodejs,
  npm,
  react,
  redux,
  gatsby,
  tailwindcss,
  sass,
  typescript,
  webpack,
} from '../public/svgs';

const techs = [
  {
    name: 'Javascript',
    svg: javascript,
  },
  {
    name: 'Typescript',
    svg: typescript,
  },
  {
    name: 'Node.js',
    svg: nodejs,
  },
  {
    name: 'npm',
    svg: npm,
  },
  {
    name: 'Babel',
    svg: babel,
  },
  {
    name: 'Webpack',
    svg: webpack,
  },
  {
    name: 'git',
    svg: git,
  },
  {
    name: 'React.js',
    svg: react,
  },
  {
    name: 'Redux',
    svg: redux,
  },
  {
    name: 'Gatsby.js',
    svg: gatsby,
  },
  {
    name: 'Firebase',
    svg: firebase,
  },
  {
    name: 'Tailwindcss',
    svg: tailwindcss,
  },
  {
    name: 'Sass',
    svg: sass,
  },
  {
    name: 'Graphql',
    svg: graphql,
  },
  {
    name: 'Apollo',
    svg: apollo,
  },
  {
    name: 'Html',
    svg: html5,
  },
  {
    name: 'Css',
    svg: css3,
  },
];

export default function Techs() {
  return (
    <div>
      <ul className='text-5xl text-center list-none 2k:text-7xl xl:text-left'>
        {techs.map((tech, i) => {
          return (
            <li
              key={i}
              className='inline-block my-4 mr-5 text-center transition-colors md:mr-4 hover:text-purple-600'
            >
              <Image src={tech.svg} alt={tech.name} className='mx-auto' />
              <p className='mt-1 text-xs font-bold 2k:text-base'>{tech.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
