import { GET_USERINFO } from '../apollo/query';
import SocialMedia from './SocialMedia';

import React from 'react';
import { useQuery } from '@apollo/client';

export default function Footer() {
  const { data, loading, error } = useQuery(GET_USERINFO);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    <p>loading...</p>;
  }

  const userInfo = React.useMemo(() => {
    return data && data.user;
  }, [data]);
  return (
    <>
      {userInfo && (
        <section className='w-11/12 px-5 py-2.5 mx-auto mt-16' id='contact'>
          <div>
            <h1 className='flex-1 text-3xl font-bold text-center text-black dark:text-white mb-7 lg:text-4xl xl:text-5xl'>
              Reach Out to me!
            </h1>
            <div className='flex flex-col justify-center lg:flex-row-reverse lg:space-x-6 lg:space-y-0'>
              <div className='order-2 text-center lg:text-left lg:self-center lg:flex-80'>
                <p className='my-4 text-base text-gray-500 uppercase md:text-xl xl:text-2xl'>
                  Discuss a project or just want to say hi? My Inbox is open for
                  all.
                </p>
                <h2 className='inline-block text-base font-bold md:text-xl xl:text-2xl'>
                  &quot;{userInfo.bio}&quot;
                </h2>
                <div className='my-4'>
                  <span className='text-base md:text-xl xl:text-2xl'>
                    Open for opportunities: {userInfo.isHireable ? 'Yes' : 'No'}
                  </span>
                </div>
                <SocialMedia />
              </div>
              <div className='flex-none order-1 py-2 mx-auto md:text-right lg:flex-20'>
                <img
                  src={userInfo.avatarUrl}
                  alt={userInfo.name}
                  className='block w-9/12 h-auto mx-auto ml-auto border-8 border-purple-600 rounded-full lg:w-full 2k:max-w-xs hover:border-purple-500'
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className='pb-4 mt-8'>
        <p className='text-center text-black dark:text-white'>
          <span className='inline-block'>Made with ❤ by Burak Akça</span>
        </p>
      </footer>
    </>
  );
}
