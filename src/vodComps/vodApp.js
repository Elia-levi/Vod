import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import LayoutVod from './layoutVod';
import HomeVod from './homeVod';
import YearVod from './yearVod';


function VodApp(props) {



    return (
            <Router>
                <Routes>
                    <Route path="/" element={<LayoutVod />} >
                        <Route index element={<HomeVod />} />
                        <Route path="/year/:YYYY" element={<YearVod />} />
                    </Route>
                </Routes>
            </Router>
    )
}

export default VodApp