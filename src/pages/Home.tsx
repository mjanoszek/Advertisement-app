import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';

function Home() {
  return (
    <>
      <Navbar isAbsolute={true} />
      <Categories />
    </>
  );
}

export default Home;
