import React from 'react';

export default function GithubRepoCard({ repo }: any) {
  function openRepoinNewTab(url: any) {
    var win = window.open(url, '_blank');
    win?.focus();
  }

  return (
    <div
      className='h-full p-8 text-gray-500 border border-gray-200 shadow-md cursor-pointer 2xl:w-9/12 dark:bg-theme-dark dark:border-gray-800 dark:hover:bg-purple-800 dark:text-white hover:shadow-xl'
      key={repo.node.id}
      onClick={() => openRepoinNewTab(repo.node.url)}
    >
      <div className='flex items-center'>
        <svg
          aria-hidden='true'
          className='octicon repo-svg'
          height='20'
          role='img'
          viewBox='0 0 12 16'
          width='14'
        >
          <path
            fillRule='evenodd'
            fill='currentColor'
            d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'
          ></path>
        </svg>
        <p className='ml-2 overflow-hidden text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap overflow-ellipsis'>
          {repo.node.name}
        </p>
      </div>
      <p className='py-2 break-words'>{repo.node.description}</p>
      <div className='flex justify-between mt-4 text-sm'>
        <div className='flex flex-1 space-x-4'>
          {repo.node.primaryLanguage !== null && (
            <span className='flex items-center'>
              <div
                className='w-3 h-3 mr-1 rounded-full'
                style={{ backgroundColor: repo.node.primaryLanguage.color }}
              ></div>
              <p>{repo.node.primaryLanguage.name}</p>
            </span>
          )}
          <span className='flex items-center'>
            <svg
              aria-hidden='true'
              className='mr-1'
              height='20'
              role='img'
              viewBox='0 0 10 16'
              width='12'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
              ></path>
            </svg>
            <p>{repo.node.forkCount}</p>
          </span>
          <span className='flex items-center'>
            <svg
              className='mr-1 dark:text-white'
              aria-hidden='true'
              height='20'
              viewBox='0 0 14 16'
              width='14'
              fill='currentColor'
            >
              <path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z' />
            </svg>
            <p>{repo.node.stargazers.totalCount}</p>
          </span>
        </div>
        <div className='repo-right-stat'>
          <p>{repo.node.diskUsage} KB</p>
        </div>
      </div>
    </div>
  );
}
