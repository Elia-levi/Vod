import React from 'react';
import { Link } from 'react-router-dom';


function Header(props){
    return(
        <header className="p-3   container-fluid  ">
        <div className="container ">
          <div className='row align-items-center '>
            <div className='col-lg-2 col-sm-6'>
              <h4 className='h3 '><a href="/"><i className="fa fa-film" aria-hidden="true"></i> Movie</a></h4>
            </div>
            <div className='col-lg-6 col-sm-6'>
              <nav >
                <Link to="/">Home </Link>
                <Link to="/settings">settings</Link>
                <Link to="/context">Context</Link>
              </nav>
            </div>
            <div className=' col-lg-4  d-flex float-end'>
            <input placeholder=' Search...' type="search" className=' p-1 ps-2'/>
            <button>Search</button>
            </div>
          </div>
        </div>
      </header>
      
    )
}

export default Header