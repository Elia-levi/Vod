import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

import axios from 'axios';
import VodItem from './vodItem';

function SearchVod(props) {
    const [ar, setAr] = useState([]);
    let param = useParams();

    useEffect(() => {
        doApi();
    }, [param])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=${param.searchQ}&apikey=8662ecc3`;
            let resp = await axios.get(url);
            setAr(resp.data.Search);
 
    }
    return (
        <div className='container'>
             <div className='row pt-4'>
                {ar.map(item => {
                    return (
                        <VodItem key={item.imdbID} item={item} />
                    )
                })}
            </div>
        </div>

    )
}

export default SearchVod