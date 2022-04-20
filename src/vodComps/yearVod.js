import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VodItem from './vodItem';


function YearVod(props) {

    const [ar, setAr] = useState([]);
    let endScreen = false;
    let page = 1;
    let param = useParams();

    useEffect(() => {
        doApi(param.YYYY,page);
        window.addEventListener("scroll", onScroll)
        return () => {
          window.removeEventListener("scroll",onScroll);
        }
    }, [param])

    const onScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 && !endScreen){
          endScreen = true;
          console.log("end")
          page++;
          doApi(page);
        }
      }

    const doApi = async (_param,_pageNum) => {
        let url = `https://www.omdbapi.com/?s=bank&y=${_param}&page=${_pageNum}&apikey=8662ecc3`;
        let resp = await axios.get(url);
        // setAr(resp.data.Search);
        setAr((ar) => [...ar, ...resp.data.Search]);
        // בודקים אם יש עוד פריטים בעמוד שאספנו ממנו
        if(resp.data.Search.length > 0){
          endScreen = false;
        }
    }
    return (

        <div className='container'>{(ar) ?
            <div className='row pt-4'>
                {ar.length === 0 ? <h2 className='ps-5 text-light pt-3 display-6'>Loading...</h2> : ""}
                {ar.map(item => {
                    return (
                        <VodItem key={item.imdbID} item={item} />

                    )
                })}
            </div> : <h2 className='ps-5 text-light pt-3 display-6'>The movie is not a Found !</h2>}
        </div>

    )
}

export default YearVod