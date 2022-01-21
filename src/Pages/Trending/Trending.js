import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Trending.css'
import SingleContent from '../../Components/SingleContent/SingleContent'
import CustomPagination from '../../Components/Pagination/CustomPagination'
function Trending() {
    const [trendingList, setTrendingList] = useState([])
    const [page, setPage] = useState(1)
    useEffect(()=>{
        const ac = new AbortController();
        const fetchTrending=async()=>{
            const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            setTrendingList(data)
        }
        fetchTrending()
        return () => ac.abort();
    },[page])
    return (
        <div>
          {trendingList.results ? <>  <span className="pageTitle">Trending</span>
          <div className="trending">
              {trendingList.results && trendingList.results.map((c)=>{
                 return <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>
              })}
          </div>
          {trendingList.total_pages>1 &&  <CustomPagination setPage={setPage} numOfPages={trendingList.total_pages}/>} </> :<h1>Loading...</h1>}
        </div>
    )
}

export default Trending
