import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ContextVod } from "../context/contextVod"
import Strip from './strip';



function Header(props) {
  let searchRef = useRef();
  let { setSearch } = useContext(ContextVod)


  return (
    <React.Fragment>
      <header className="p-3   container-fluid  ">
        <div className="container ">
          <div className='row align-items-center '>
            <div className='col-lg-2 col-sm-6'>
              <h4 className='h3 '><a href="/"><i className="fa fa-film" aria-hidden="true"></i> Movie</a></h4>
            </div>
            <div className='col-lg-6 col-sm-6'>
              <nav >
                <Link to="/">Home </Link>
                <Link to="/year/:2021">2021</Link>
                <Link to="/year/:2020">2020</Link>
                <Link to="/year/:2000">2000</Link>
                <Link to="/year/:1995">1995</Link>
                <Link to="/year/:1989">1989</Link>
              </nav>
            </div>
            <div className=' col-lg-4  d-flex float-end'>
              <input ref={searchRef} placeholder=' Search...' type="search" className=' p-1 ps-2' />
              <button onClick={() => {
                setSearch(searchRef.current.value)
              }}>Search</button>
            </div>
          </div>
        </div>
      </header>
      <Strip />
    </React.Fragment>


  )
}

export default Header