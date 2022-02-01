import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function VideoInfo(props) {
    let param = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?i=${param.id}&apikey=8662ecc3`;
        let resp = await axios.get(url);
        setItem(resp.data);
        console.log(resp.data);
    }


    return (
        <div className='container'>
           {(item.Title)? <div className='row'>
            <div className='info-text col-lg-8 col-md-6 my-md-4'>
                    <h2 className='h2-info'>{item.Title}.</h2>
                    <p className='ps-2'>{item.Plot}</p>
                    <h4 className='fw-light fs-5'><span className='fw-bolder fs-4 '>Genre:</span> {item.Genre}.</h4>
                    <h4 className='fw-light fs-5'><span className='fw-bolder fs-4'>Actors:</span> {item.Actors}.</h4>
                    <h4 className='fw-light fs-5'><span className='fw-bolder fs-4'>Year:</span> {item.Year}.</h4>
                    <h4 className='fw-light fs-5'><span className='fw-bolder fs-4'>Rating:</span> {item.imdbRating} </h4>
                    <Link  to={"/"} className='btn btn-danger my-2 '>Beack home</Link>
                </div>
            <div className='col-lg-4 my-lg-4 mt-sm-5 col-md-6 ord'>
                    {(item.Poster !== "N/A") ? <img src={item.Poster} className='img-info  shadow'  alt={item.Title} />
                        : <img src={"https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} className='img-info  shadow'  alt={item.Title} />}
                </div>


            </div>:<h2 className='ps-5 text-light pt-3 display-6'>Login...</h2>}
        </div>

    )
}

export default VideoInfo