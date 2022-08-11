import React from 'react'
import { Link } from "react-router-dom";


const Painting = ({data, setIdToRender}) => {
    const path = `./img/${data.filename}`
  return (
    <div>
        <p>Author: {data.author}</p>
        <p>Title: {data.title}</p>
        <Link to="/detailed-picture"><img src={path} alt="" onClick={() => setIdToRender(data.id)}/></Link><br />
        <Link to="/detailed-picture"><button onClick={() => setIdToRender(data.id)}>Show more</button></Link>
    </div>
  )
}

export default Painting