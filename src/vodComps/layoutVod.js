import React from 'react';
import {  Outlet } from 'react-router-dom';
import Header from './header';
import Strip from './strip';

function LayoutVod(props) {
  return (
    <React.Fragment>
      <Header />
      <Strip/>
      <main >
        <Outlet />
      </main>
      <footer className='bgFooter text-light container-fluid  text-center p-5 '>
        <div>the best movie in the world</div>
      </footer>
    </React.Fragment>
  )
}

export default LayoutVod