import React, { useEffect, useState } from 'react'
import axios from "axios"
import SingleContent from '../../Components/SingleContent/SingleContent'
import CustomPagination from '../../Components/Pagination/CustomPagination'
function Movies() {
    const [moviesList, setMoviesList] = useState([])
    const [page, setPage] = useState(1)
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    useEffect(()=>{
        const fetchMovies=async()=>{
            const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
            setMoviesList(data)
        }
        fetchMovies()
    },[page])
    return (
        <div>
        {moviesList.results ? <>  <span className="pageTitle">Movies</span>
        {/* {<Genres type="movie" selectedGenres={selectedGenres} genres={genres} setGenres={setGenres} setPage={setPage}/>} */}
        <div className="trending">
            {moviesList.results && moviesList.results.map((c)=>{
               return <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>
            })}
        </div>
       {moviesList.total_pages>1 &&  <CustomPagination setPage={setPage} numOfPages={moviesList.total_pages}/>} </> :<h1>Loading...</h1>}
      </div>
    )
}

export default Movies
