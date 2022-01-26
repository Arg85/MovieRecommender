import axios from "axios";
import React, {useEffect } from "react";
import Chip from "@mui/material/Chip";
function Genres({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) {
  const handleDeleteGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };
  const handleAddGenre = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id!==genre.id))
    setPage(1);
  };

  const fetchGenres =async() => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    console.log("runny fetchyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
    setGenres(data.genres)
}
useEffect(()=>{
console.log("runny inside")
fetchGenres()
return ()=>{
    setGenres([])
}
},[])
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre, index) => {
          return (
            <Chip
              sx={{ margin: "2px" }}
              key={genre.id}
              onDelete={(e) => handleDeleteGenre(genre)}
              color="primary"
              label={genre.name}
              clickable
              size="small"
            />
          );
        })}
      {genres &&
        genres.map((genre, index) => {
          return (
            <Chip
              sx={{ margin: "2px" }}
              key={genre.id}
              onClick={(e) => handleAddGenre(genre)}
              label={genre.name}
              clickable
              size="small"
            />
          );
        })}
    </div>
  );
}

export default Genres;
