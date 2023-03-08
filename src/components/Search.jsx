import React from 'react'
import StarRating from './StarRating'

const Search = ({searchValue,searchRating,handleRating,handleSearch}) => {
  return (
    <div    className='header-container'    >
     <h1>Our Movie App</h1>
     <div className='search-container' >
     <    input value={searchValue} onChange={handleSearch}
      className='inp'        type="text"    placeholder='Enter a movie to search..'/>
      <StarRating  handlerating={handleRating}  rating={searchRating}
       />
     <h3>Star rating</h3>
     </div>


    </div>
  )
}

export default Search