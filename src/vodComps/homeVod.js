import React from 'react';

function HomeVod(props) {



    return (
        <div>
            <div className='container-fluid bgDark'>
                <div className='container'>
                    <div className='row pt-4'>
                        {props.vod_ar.map(item => {
                            return (
                                <div key={item.imdbID} className='col-lg-3 col-md-4  p-2 text-light'>
                                    <div className='p-2 center '>
                                        <img src={item.Poster} className='imgBord ' height={300} alt='{item.Title}'/>
                                        <h5 className=' px-3  py-2'>{item.Title}</h5>
                                        <div className='d-flex align-items-center justify-content-around '>
                                        <button className='  btnHome'>More info</button>
                                        <small className='text-decoration-underline'>{item.Year}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeVod

