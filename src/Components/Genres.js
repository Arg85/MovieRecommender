import axios from 'axios'
import React, { useEffect ,useState} from 'react'

function Genres({selectedGenres,setSelectedGenres,genres,setGenres,type,setPage}) {
    const [genre, setGenre] = useState([])
    return (
        useEffect(()=>{
            const fetchGenres=async()=>{
const {data}=axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            }
            fetchGenres()
        })
        <div>
            
        </div>
    )
}

export default Genres
