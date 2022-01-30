import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VodItem from './vodItem';


function YearVod(props) {

    const [search, setSearch] = useState('red')
    const [ar, setAr] = useState([]);
    const params = useParams();

    useEffect(() => {
        doApi();
    }, [search])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=${search}&Y=${params.Y}&apikey=8662ecc3`;
        let resp = await axios.get(url);
        console.log(resp.data.Search);
        setAr(resp.data.Search);
    }
    return (
        <div>
            <div className='container-fluid bgDark'>
                <div className='container'>
                    <div className='row pt-4'>
                        {ar.map(item => {
                            return (
                                <VodItem key={item.imdbID}  item={item}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YearVod