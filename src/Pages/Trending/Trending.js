import React, { useEffect, useState } from 'react'
import axios from "axios"
import SingleContent from '../../Components/SingleContent/SingleContent'
function Trending() {
    const [trendingList, setTrendingList] = useState([])
    const fetchTrending=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
        setTrendingList(data.results)
    }
    useEffect(()=>{
        fetchTrending()
    },[])
    return (
        <div>
            <span className="pageTitle">Trending</span>
          <div className="trending">
              {trendingList && trendingList.map((c)=>{
                 return <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>
              })}
          </div>
        </div>
    )
}

export default Trending
