import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LayoutVod from './layoutVod';
import HomeVod from './homeVod';



// תמונה
// https://images.pexels.com/photos/7234404/pexels-photo-7234404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500

function VodApp(props) {
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
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LayoutVod />} >
                        <Route index element={<HomeVod/>} />
                        {/* <Route path="/settings" element={<Settings />} /> */}
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default VodApp