import React from 'react';
import { Link } from 'react-router-dom';

function VodItem(props) {
    let item = props.item;

    return (
        
        <div key={item.imdbID} className='col-lg-3 col-md-4  p-2 text-light'>
            <div className='p-2 center '>
                {(item.Poster !== "N/A") ? <Link to={"/video/" + item.imdbID}> <img src={item.Poster} className='img-bord ' height={300} alt={item.Title} /></Link>
                    : <Link to={"/video/" + item.imdbID}> <img src={"https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} className='img-bord ' height={300} alt={item.Title} /> </Link>}
                <h4 className='fs-6 px-3 px-sm-5 px-md-2 py-2'>{item.Title}</h4>
                <div className='d-flex align-items-center justify-content-around '>
                    <Link className=' btn-home ms-sm-5 ms-md-0' to={"/video/" + item.imdbID} >More info</Link>
                    <small className='text-decoration-underline me-sm-5 me-md-0'>{item.Year}</small>
                </div>
            </div>
        </div>)
}

export default VodItem
