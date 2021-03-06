import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Strip from './strip';



function Header(props) {
  let searchRef=useRef();
  let nav=useNavigate();

  const seracs=()=>{
      {(searchRef.current.value)?
      nav("/search/"+searchRef.current.value) : nav("/")}
  }

  const onKeyboardClick = (e) => {
    if(e.key === "Enter"){
      seracs();
    }
  }


  return (
    <React.Fragment>
      <header className="p-3   container-fluid  ">
        <div className="container ">
          <div className='row align-items-center '>
            <div className='col-lg-2 col-sm-6'>
              <h2 className='h3 '><Link to="/"><i className="fa fa-film" aria-hidden="true"></i> Movie</Link></h2>
            </div>
            <div className='col-lg-6 col-sm-6 '>
              <nav >
                <Link to="/year/2021">2021</Link>
                <Link to="/year/2020">2020</Link>
                <Link to="/year/2000">2000</Link>
                <Link to="/year/1995">1995</Link>
                <Link to="/year/1989">1989</Link>
              </nav>
            </div>
            <div className=' col-lg-4  d-flex  justify-content-md-center  justify-content-lg-end '>
              <input onKeyDown={onKeyboardClick} ref={searchRef}  placeholder=' Search...' type="search" className=' p-1 ps-2' />
              <button  onClick={seracs}><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </header>
      <Strip />
    </React.Fragment>


  )
}

export default Header