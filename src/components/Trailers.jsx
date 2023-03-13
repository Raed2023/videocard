import React from 'react'
import { useParams } from 'react-router-dom'

const Trailers = ({list}) => {
    const {id} =useParams()
    const item=list.find(el=>el.id==id)
    // console.log(item)
  return (
    <div>
<h1>{item.name}</h1>
<h3>{item.date}</h3>

        <iframe src={item.vid} ></iframe>

    </div>
  )
}

export default Trailers