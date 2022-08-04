import * as React from 'react';
import Nav from '../components/navbar';
import PageLayout from '../components/pagelayout';

const IndexPage = () => {
  return (
    <PageLayout>
      <Nav />
      <div className="mt-[142px] flex items-center justify-center">
        <h1 className="text-center font-emphasis text-5xl font-bold leading-[52px] text-white">
          <span className="font-sans">1</span>
          <span>%</span> World Class
          <span className="gradientHeading font-sans"> Agile squads </span>
          <br />
          for your Product
        </h1>
      </div>
    </PageLayout>
  );
};

export default IndexPage;
