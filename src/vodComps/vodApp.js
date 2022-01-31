import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import LayoutVod from './layoutVod';
import HomeVod from './homeVod';
import YearVod from './yearVod';
import SearchVod from './searchVod';
import VideoInfo from './videoInfo';


function VodApp(props) {



    return (
            <Router>
                <Routes>
                    <Route path="/" element={<LayoutVod />} >
                        <Route index element={<HomeVod />} />
                        <Route path="/year/:YYYY" element={<YearVod />} />
                        <Route path="/search/:searchQ" element={<SearchVod />} />
                        <Route path="/video/:id" element={<VideoInfo />} />

                    </Route>
                </Routes>
            </Router>
    )
}

export default VodApp