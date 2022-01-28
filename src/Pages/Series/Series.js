import React, { useEffect, useState } from 'react'
import axios from "axios"
import SingleContent from '../../Components/SingleContent/SingleContent'
import CustomPagination from '../../Components/Pagination/CustomPagination'
import Genres from '../../Components/Genres'
import useGenre from '../../hooks/useGenres'
function Series() {
    const [seriesList, setSeriesList] = useState([])
    const [page, setPage] = useState(1)
    const [genres, setGenres] = useState([])
    const [numOfPages, setNumOfPages] = useState(1)
    const [selectedGenres, setSelectedGenres] = useState([])
    const urlGenre=useGenre(selectedGenres)
    const fetchSeries=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${urlGenre}`)
        setSeriesList(data)
        setNumOfPages(data.total_pages)
    }
    useEffect(()=>{
        fetchSeries()
        //eslint-disable-next-line
    },[page,urlGenre])
    return (
        <div>
        {seriesList.results ? <>  <span className="pageTitle">TV Series</span>
        {<Genres type="movie" setSelectedGenres={setSelectedGenres} selectedGenres={selectedGenres} genres={genres} setGenres={setGenres} setPage={setPage}/>}
        <div className="trending">
            {seriesList.results && seriesList.results.map((c)=>{
               return <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>
            })}
        </div>
       {seriesList.total_pages>1 &&  <CustomPagination setPage={setPage} numOfPages={numOfPages}/>} </> :<h1>Loading...</h1>}
      </div>
    )
}

export default Series
