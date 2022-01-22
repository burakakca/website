import React, { useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function ScrollTop() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('topButton').style.visibility = 'visible';
    } else {
      document.getElementById('topButton').style.visibility = 'hidden';
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    window.onload = function () {
      scrollFunction();
    }; //To make sure that this button is not visible at starting.
    // When the user clicks on the button, scroll to the top of the document
  });

  return (
    <button
      onClick={TopEvent}
      id='topButton'
      className='fixed z-50 invisible p-4 text-xl text-white transition-colors bg-purple-800 border-none shadow-xl bottom-5 right-6 hover:bg-purple-600 rounded-2xl'
      title='Go to top'
    >
      <ChevronUpIcon className='w-6 h-6 storoke-2' />
    </button>
  );
}
