import React from 'react';
import Github from '../components/icons/github';
import Gmail from '../components/icons/gmail';
import Instagram from '../components/icons/instagram';
import Linkedin from '../components/icons/linkedin';
import Twitter from '../components/icons/twitter';
// import StackOverflow from '../components/icons/stackoverflow'
// import Medium from '../components/icons/medium'

const socialMediaLinks = {
  github: 'https://github.com/burakakca',
  linkedin: 'https://www.linkedin.com/in/burakakca/',
  gmail: 'burak.akca834@gmail.com',
  gitlab: 'https://gitlab.com/burakakcaWalue',
  // medium: 'https://medium.com/burakakca',
  // stackoverflow: 'https://stackoverflow.com/burakakca',
  twitter: 'https://twitter.com/akca_burakk',
  instagram: 'https://www.instagram.com/akca.burakk/',
};

type Props = {
  href: string;
  children: JSX.Element;
};

const SocialButton = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      className='my-2.5 w-11 h-11 2k:w-14 2k:h-14 flex cursor-pointer bg-indigo-900 hover:bg-indigo-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full'
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default function socialMedia() {
  return (
    <div className='flex justify-center space-x-2 text-4xl text-center md:text-justify lg:justify-start lg:space-x-3 xl:space-x-4'>
      <SocialButton href={socialMediaLinks.linkedin}>
        <Linkedin />
      </SocialButton>
      <SocialButton href={socialMediaLinks.gmail}>
        <Gmail />
      </SocialButton>
      <SocialButton href={socialMediaLinks.github}>
        <Github />
      </SocialButton>
      <SocialButton href={socialMediaLinks.instagram}>
        <Instagram />
      </SocialButton>
      <SocialButton href={socialMediaLinks.twitter}>
        <Twitter />
      </SocialButton>
    </div>
  );
}
