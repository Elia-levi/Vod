import React, { useEffect, useState } from 'react';
import axios from 'axios';

import VodItem from './vodItem';


function HomeVod(props) {
    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=bank&apikey=8662ecc3`;
        let resp = await axios.get(url);
        setAr(resp.data.Search);
    }
    return (
        <div className='container'>
            {ar.length == 0 ? <h2 className='ps-5 text-light pt-3 display-6'>Loading...</h2> : ""}
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

export default HomeVod

