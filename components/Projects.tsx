import GithubRepoCard from './GithubRepoCard';
import { GET_REPOSITORIES } from '../apollo/query';

import React from 'react';
import { useQuery } from '@apollo/client';

export default function Projects() {
  const { data, loading, error } = useQuery(GET_REPOSITORIES);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    <p>loading...</p>;
  }

  const pinnedItems = React.useMemo(() => {
    return data && data.user.pinnedItems;
  }, [data]);

  return (
    <section
      className='flex flex-col w-11/12 px-5 py-2.5 mx-auto mt-16'
      id='opensource'
    >
      <h1 className='flex-1 text-3xl font-bold text-center text-black dark:text-white mb-7 lg:text-4xl xl:text-5xl'>
        Open Source Projects
      </h1>
      <div className='flex flex-col space-y-4 2xl:items-center'>
        {pinnedItems &&
          pinnedItems.edges.map((v: any) => {
            return <GithubRepoCard repo={v} key={v.node.id} />;
          })}
      </div>
      <div className='flex justify-center mt-5'>
        <a
          className='block px-4 py-2 font-bold text-white uppercase transition-colors bg-purple-900 border border-purple-900 rounded cursor-pointer max-w-max hover:bg-transparent hover:text-purple-900 dark:hover:border-gray-500 dark:hover:text-white font-lg'
          href='https://github.com/burakakca'
          target='_blank'
          rel='noopener noreferrer'
        >
          MORE PROJECTS
        </a>{' '}
      </div>
    </section>
  );
}
