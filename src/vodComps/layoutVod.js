import React from 'react';
import {  Outlet } from 'react-router-dom';
import Header from './header';

function LayoutVod(props) {
  return (
    <React.Fragment>
      <Header/>
      <main >
        <Outlet />
      </main>
      <footer className='bgFooter text-light container-fluid  text-center p-4 '>
        <div>the best movie in the world</div>
      </footer>
    </React.Fragment>
  )
}

export default LayoutVod