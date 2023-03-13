import React from 'react'
import StarRating from './StarRating'
import Editmovie from './Editmovie'
import { Link } from 'react-router-dom'

const MovieCard = ({filmz,handleDelete,handleEdit}) => {
  return (
    <div className='movie-card' >
{/* <h3><StarRating rating={filmz.rating} /></h3> */}

<img src= {filmz.img} alt={filmz.name} />
<h3>{filmz.name}</h3>
<h3>{filmz.date}</h3>
{filmz && <StarRating rating={filmz.rating} />}
<button className='btn-primary' onClick={() => handleDelete( filmz.id)}>
        Delete
      </button>
      <Link to={`/Trailers/${filmz.id}`}>
      <button className='btn-primary' >
        Trailer
      </button>
      </Link>
      
      <Editmovie filmz={filmz} handleEdit={handleEdit} />



    </div>
    
  )
}

export default MovieCard
