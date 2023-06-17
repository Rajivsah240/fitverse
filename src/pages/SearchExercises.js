import React from 'react'
import SearchExercisesBox from '../components/SearchExerciseBox'

const SearchExercises = () => {
  return (
<<<<<<< HEAD
    <SearchExercisesBox/>
    
=======
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button sx={{ bgcolor: '#FF2625', color: '#000', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}>
          Search
        </Button>
      </Box>
    </Stack>
>>>>>>> 74191148cdfd32e6f1858bb61f30aca4e5e60373
  )
}

export default SearchExercises