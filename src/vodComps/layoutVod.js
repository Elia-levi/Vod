import React from 'react';
import { Outlet } from 'react-router-dom';

function LayoutVod(props){
    return(
        <div>
        <Outlet />
      </div>
    )
}

export default LayoutVod