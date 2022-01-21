import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomIcons({setPage,numOfPages}) {
    const handlePageChange=(page)=>{
        window.scroll(0,0)
        setPage(page)
    

    }
  return (
    <Stack spacing={2} sx={{alignItems:"center",margin:"20px 0px"}}>
      <Pagination
      onChange={(e)=>{handlePageChange(e.target.textContent)}}
        count={numOfPages}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
