import React from 'react';
import VodItem from './vodItem';


function HomeVod(props) {
    
    return (  
                <div className='container'>
                    <div className='row pt-4'>
                        {props.vod_ar.map(item => {
                            return (
                                <VodItem key={item.imdbID}  item={item}/>
                            )
                        })}
                    </div>
                </div>
    )
}

export default HomeVod

