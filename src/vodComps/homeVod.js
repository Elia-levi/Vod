import React from 'react';
import VodItem from './vodItem';


function HomeVod(props) {
    return (
        <div>
            <div className='container-fluid bgDark'>
                <div className='container'>
                    <div className='row pt-4'>
                        {props.vod_ar.map(item => {
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

export default HomeVod

