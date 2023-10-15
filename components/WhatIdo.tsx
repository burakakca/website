import React from 'react';
import Image from 'next/image';
// import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import Techs from './Techs';
import developerActivity from '../public/svgs/developerActivity.svg';
import { LightningBoltIcon } from '@heroicons/react/solid';

const skills = [
  'Develop highly interactive Front end / User Interfaces for your web applications',
  'Progressive Web Applications ( PWA ) in normal and SPA Stacks',
  'Integration of third party services such as Firebase',
];

export default function WhatIdo() {
  return (
    <section className='w-11/12 px-5 py-2.5 mx-auto mt-16' id='whatido'>
      <div className='flex flex-col lg:flex-row md:space-x-8 lg:space-x-16'>
        <div className='flex-1 order-2 mb-8 lg:order-1 text'>
          <Image
            className='h-auto max-w-full'
            alt='Man Working'
            src={developerActivity}
          />
        </div>
        <div className='flex-1 order-1 m-5 mb-8 md:m-0 lg:mr-12 lg:order-2'>
          <h1 className='flex justify-center my-5 text-3xl font-bold text-black dark:text-white xl:text-4xl 2xl:text-5xl xl:justify-start'>
            What I do
          </h1>
          <p className='text-base antialiased text-center text-gray-500 2k:text-2xl xl:text-left'>
            CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
          <Techs />
          <div className='text-left md:text-center lg:text-left'>
            {skills.map((skill, i) => {
              return (
                <p key={i} className='my-4 text-base text-gray-500 2k:text-2xl'>
                  <LightningBoltIcon className='w-4 h-4 inline-block mr-1.5 text-yellow-300' />
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
