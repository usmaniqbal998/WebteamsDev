import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <main>
      <div className="p-5">{children}</div>
    </main>
  );
};

export default PageLayout;
