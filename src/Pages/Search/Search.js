import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/Genres";
import useGenre from "../../hooks/useGenres";
import axios from "axios";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [type, setType] = useState("one");
  const [page, setPage] = React.useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  const handleChange = (event, newValue) => {
    setType(newValue);
   if(searchText){
    fetchSearch()
    setPage(1);
   }
  };
  const fetchSearch = async () => {
    const { data } = await axios.get(`
       https://api.themoviedb.org/3/search/${type==="one" ? "tv" : "movie"}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
    setContent(data.results);
    console.log(!content)
    console.log(content.length)

    
    setNumOfPages(data.results.total_pages);
    
  };
  useEffect(() => {
      console.log(content,"conty")
    window.scroll(0, 0);
  },[type]);
  return (
    <>
      <div style={{ display: "flex" }}>
        <TextField
          style={{ flex: 1 }}
          id="filled-basic"
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained"  onClick={(e)=>fetchSearch()} style={{ marginLeft: 10 }}>
          <SearchIcon />
        </Button>
      </div>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={type}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          style={{ paddingBottom: 5 }}
          aria-label="secondary tabs example"
        >
          <Tab value="one" style={{ width: "50%" }}  label="Tv Series" />
          <Tab value="two" style={{ width: "50%" }} label="Movies" />
        </Tabs>
        {content? (
          <>
            <div className="trending">
            {content &&
                content.map((c) => {
                  return (
                    <SingleContent
                      key={c.id}
                      id={c.id}
                      poster={c.poster_path}
                      title={c.title || c.name}
                      date={c.first_air_date || c.release_date}
                      media_type={type ? "tv" :"movie"}
                      vote_average={c.vote_average}
                    />
                  );
                })}
                {(content.length===0 ) ? type==="one"?<h2>No series to show</h2>:<h2>No movies to show</h2>:""}
            </div>
            {numOfPages > 1 && (
              <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}{" "}
          </>
        ) :""}
      </Box>
    </>
  );
}

export default Search;
