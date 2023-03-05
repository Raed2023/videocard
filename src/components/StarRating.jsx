import React from 'react'

const StarRating = ({rating}) => {
    const Stars=(x)=>{
let star =[];
for (let i   = 0; i< 5; i++) {
    if (i<x) {
       star.push(<span    style={{color:"gold", fontSize:"20px"}}      >★</span>)
    } 
    else
    star.push(<span    style={{color:"black" ,fontSize:"20px" }}      >★</span>)
}
return star;

    }
  return (
    <div>{Stars(rating)}</div>
  )
}

export default StarRating