import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LayoutVod from './layoutVod';
import HomeVod from './homeVod';


function VodApp(props) {
    const[search,setSearch]=("bank")
    const [ar, setAr] = useState([]);



    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=bank&apikey=8662ecc3`;
        let resp = await axios.get(url);
        console.log(resp.data.Search);
        setAr(resp.data.Search);
    }


    return (
            <Router>
                <Routes>
                    <Route path="/" element={<LayoutVod />} >
                        <Route index element={<HomeVod  vod_ar={ar}/>} />
                        {/* <Route path="/settings" element={<Settings />} /> */}
                    </Route>
                </Routes>
            </Router>
    )
}

export default VodApp