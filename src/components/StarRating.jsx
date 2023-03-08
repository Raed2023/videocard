import React from 'react'

const StarRating = ({rating, handlerating}) => {
    const Stars=(x)=>{
let star =[];
for (let i = 1; i<= 5; i++) {
    if (i<=x) {
       star.push(<span  onClick={()=>handlerating(i)}  style={{color:"gold", fontSize:"20px",cursor:'pointer'}}      >★</span>)
    } 
    else
    star.push(<span  onClick={()=>handlerating(i)}   style={{color:"black" ,fontSize:"20px" ,cursor:'pointer' }}      >★</span>)
}
return star;

    }
  return (
    <div>{Stars(rating)}</div>
  )
}
StarRating.defaultProps={
  rating:1,
  handlerating:()=> {},
}

export default StarRating