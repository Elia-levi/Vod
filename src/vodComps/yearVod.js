import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import VodItem from './vodItem';


function YearVod(props) {

    const [ar, setAr] = useState([]);
    let param = useParams();

    useEffect(() => {
        doApi(param);
    }, [param])

    const doApi = async (param) => {
        let url = `https://www.omdbapi.com/?s=bank&y=${param.YYYY}&apikey=8662ecc3`;
        let resp = await axios.get(url);
        setAr(resp.data.Search);
    }
    return (
                <div className='container'>{(ar)?
                    <div className='row pt-4'>
                        {ar.map(item => {
                            return (
                                <VodItem key={item.imdbID}  item={item}/>
                            )
                        })}
                    </div>:<h2 className='ps-5 text-light pt-3 display-6'>The page not found!</h2>}
                </div>

    )
}

export default YearVod