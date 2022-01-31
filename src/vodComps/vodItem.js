import React from 'react';

function VodItem(props){
    let item = props.item;

    return(
        <div key={item.imdbID} className='col-lg-3 col-md-4  p-2 text-light'>
        <div className='p-2 center '>
            <img src={item.Poster} className='img-bord ' height={300} alt={item.Title}/>
            <h5 className=' px-3  py-2'>{item.Title}</h5>
            <div className='d-flex align-items-center justify-content-around '>
            <button className='  btn-home'>More info</button>
            <small className='text-decoration-underline'>{item.Year}</small>
            </div>
        </div>
    </div>    )
}

export default VodItem