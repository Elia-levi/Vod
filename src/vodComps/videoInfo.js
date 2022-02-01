import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';


function VideoInfo (props){
    let param =useParams();
    const [item,setItem]=useState({});

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?i=${param.id}&apikey=8662ecc3`;
            let resp = await axios.get(url);
            setItem(resp.data.Search);
            console.log(resp.data);
    }


    return (
        <div className='container'>
            <h2 className='text-light'>hi</h2>
        </div>

)
}

export default VideoInfo