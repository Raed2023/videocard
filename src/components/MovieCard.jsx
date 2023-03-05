import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({filmz}) => {
  return (
    <div className='movie-card' >
<h3><StarRating rating={filmz.rating} /></h3>
<img src= {filmz.img} alt={filmz.name} />
<h3>{filmz.name}</h3>
<h3>{filmz.date}</h3>



    </div>
  )
}

export default MovieCard
