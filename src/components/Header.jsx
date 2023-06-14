import React, { useEffect } from 'react';
import Nav from './Nav';

function Header({ title, subtitle, desc }) {
  const currentPage = window.location.pathname;

  useEffect(() => {
    document.title = title + ' | CC de Amine';
    document.description = desc;
  }, [title]);

  return (
    <div className="relative pb-16 sm:pb-24">
      <Nav currentPage={currentPage} />

      <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            <span className="block align-center  font-extrabold">
              <span className="text-secondary align-center">{title}</span>
            </span>
            <span className="block text-3xl text-light font-bold mt-2">
              {subtitle}
              {subtitle === 'Par Amine Benameur' && (
                <sup>
                  <span className="ml-2 rounded-lg bg-secondary text-light text-sm py-1 px-2">6 GTb</span>
                </sup>
              )}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
