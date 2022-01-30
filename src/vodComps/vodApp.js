import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import LayoutVod from './layoutVod';
import HomeVod from './homeVod';
import {ContextVod} from "../context/contextVod";
import YearVod from './yearVod';


function VodApp(props) {
    const[search,setSearch]=useState('bank')
    const [ar, setAr] = useState([]);



    useEffect(() => {
        doApi();
    }, [search])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=${search}&apikey=8662ecc3`;
        let resp = await axios.get(url);
        console.log(resp.data.Search);
        setAr(resp.data.Search);
    }


    return (
        <ContextVod.Provider value={{ setSearch }}>
            <Router>
                <Routes>
                    <Route path="/" element={<LayoutVod />} >
                        <Route index element={<HomeVod  vod_ar={ar}/>} />
                        <Route path="/year/:YYYY" element={<YearVod />} />
                    </Route>
                </Routes>
            </Router>
            </ContextVod.Provider>

    )
}

export default VodApp