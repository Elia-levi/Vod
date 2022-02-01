import React, { useEffect, useState } from 'react';
import {   useParams } from 'react-router-dom';

import axios from 'axios';
import VodItem from './vodItem';

function SearchVod(props) {
    const [ar, setAr] = useState([]);
    let param = useParams();

    useEffect(() => {
        doApi(param.searchQ);
    }, [param])

    const doApi = async (_param) => {
        let url = `https://www.omdbapi.com/?s=${_param}&apikey=8662ecc3`;
            let resp = await axios.get(url);
            setAr(resp.data.Search);

    }
    
    return (
        <div className='container'>{(ar)?
             <div className='row pt-4'>
                {ar.map(item => {
                    return (
                        <VodItem key={item.imdbID} item={item} />
                    )
                })}
            </div>:<h2 className='ps-5 text-light pt-3 '>The movie is not a Found !</h2>}
        </div>

    )
}

export default SearchVod