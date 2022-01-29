import React from 'react';

function HomeVod(props) {



    return (
        <div>
            <div
                style={{
                    backgroundImage: "url(" + "https://images.pexels.com/photos/7234404/pexels-photo-7234404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    minHeight: '250px'
                }}>
            </div>
            <div className='container-fluid bgDark'>
                <div className='container'>
                    <div className='row pt-4'>
                        {props.vod_ar.map(item => {
                            return (
                                <div key={item.imdbID} className='col-lg-3 col-md-4  p-2 text-light'>
                                    <div className='p-2  '>
                                        <img src={item.Poster} className='imgBord float-center' height={300} alt='{item.Title}'/>
                                        <h5 className=' ps-2 pe-5 py-1 text-center'>{item.Title}</h5>
                                        <div className='d-flex align-items-center justify-content-between  '>
                                        <button className='ms-1  btnHome'>More info</button>
                                        <small className='me-5'>{item.Year}</small>
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

