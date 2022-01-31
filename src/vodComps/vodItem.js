import React from 'react';

function VodItem(props){
    let item = props.item;

    return(
        <div key={item.imdbID} className='col-lg-3 col-md-4  p-2 text-light'>
        <div className='p-2 center '>
        {(item.Poster!=="N/A")?<img  src={item.Poster} className='img-bord ' height={300} alt={item.Title}/>:
        <img  src={"https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} className='img-bord ' height={300} alt={item.Title}/>}
            <h4 className='fs-6 px-3  py-2'>{item.Title}</h4>
            <div className='d-flex align-items-center justify-content-around '>
            <button className='  btn-home'>More info</button>
            <small className='text-decoration-underline'>{item.Year}</small>
            </div>
        </div>
    </div>    )
}

export default VodItem
