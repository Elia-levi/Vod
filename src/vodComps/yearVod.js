import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VodItem from './vodItem';


function YearVod(props) {

    const [ar, setAr] = useState([]);
    let params = useParams();

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=black&apikey=8662ecc3`;
        let resp = await axios.get(url);
        console.log(resp.data.Search);
        setAr(resp.data.Search);
    }
    return (
                <div className='container'>
                    <div className='row pt-4'>
                        {ar.map(item => {
                            return (
                                <VodItem key={item.imdbID}  item={item}/>
                            )
                        })}
                    </div>
                </div>

    )
}

export default YearVod