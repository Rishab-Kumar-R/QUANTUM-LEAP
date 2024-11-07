import React from 'react';

function MainContent() {
  return (
    <>
    <div className='container mx-auto'>

    <main className="flex-grow flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-2">Welcome to <span className='text-indigo-700'>{'{Quantum Leap}'}</span></h1>
      {/* <p className="text-lg italic text-gray-50 dark:text-gray-300"> */}
      <p className="text-lg italic">
        What else do you expect from us than leaking your data
      </p>
    </main>
    </div>
    </>
  );
}

export default MainContent;
