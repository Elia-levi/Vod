import React from 'react';
import {  Outlet } from 'react-router-dom';
import Header from './header';

function LayoutVod(props) {
  const currentYear = (new Date().getFullYear())

  return (
    <React.Fragment>
      <Header />
      <main  className='container-fluid  pb-4'>
        <Outlet />
      </main>
      
      <footer className='bg-footer text-light container-fluid  text-center p-4 '>
        <div>All right reserved © Elia levi {currentYear}.</div>
      </footer>
    </React.Fragment>
  )
}

export default LayoutVod