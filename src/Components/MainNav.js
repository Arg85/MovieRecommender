import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';

export default function Main() {
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation
         sx={{ width: '100%',position: 'fixed',bottom:0 ,backgroundColor:'#000000',color:"#ffffff"}}

        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{color:"#ffffff"}}label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction sx={{color:"#ffffff"}}label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction sx={{color:"#ffffff"}}label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction sx={{color:"#ffffff"}}label="Search" icon={<SearchIcon />} />
      </BottomNavigation>

  );
}
