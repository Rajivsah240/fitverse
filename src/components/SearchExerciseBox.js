import {React,useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'


const SearchExercisesBox = () => {

  const [search, setSearch] = useState('');

  return (
    <Stack className = 'SearchExerciseBox' alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography color={'white'} fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box  position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button sx={{ bgcolor: 'transparent', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' },borderRadius:'45px' }}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercisesBox