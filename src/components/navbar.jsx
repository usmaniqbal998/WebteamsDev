import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <StaticImage src="../images/logo.svg" width={130} alt="Logo Web Teams" />

      <div id="mobileNavBtn" className="flex w-8 flex-col items-end">
        <div className="h-0.5 w-full border border-solid border-white"></div>
        <div className="mt-2 h-0.5 w-1/2 border border-solid border-white"></div>
      </div>
    </nav>
  );
};

export default Nav;
