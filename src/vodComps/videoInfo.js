import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';


function VideoInfo (props){
    let param = useParams();

    useEffect(() => {
        doApi(param.YYYY);
    }, [param])

    const doApi = async (_param) => {
        let url = `https://www.omdbapi.com/i=&apikey=8662ecc3`;
        let resp = await axios.get(url);
        setAr(resp.data.Search);
    }
    return (
        <div className='container'>

        </div>

)
}

export default VideoInfo