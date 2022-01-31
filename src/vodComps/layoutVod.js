import React from 'react';
import {  Outlet } from 'react-router-dom';
import Header from './header';

function LayoutVod(props) {
  return (
    <React.Fragment>
      <Header />
      <main  className='container-fluid  pb-4'>
        <Outlet />
      </main>
      <footer className='bgFooter text-light container-fluid  text-center p-5 '>
        <div>the best movie in the world</div>
      </footer>
    </React.Fragment>
  )
}

export default LayoutVod