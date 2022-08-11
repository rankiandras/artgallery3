import React from 'react'
import { Link } from "react-router-dom";


const Detailedpicture = ({ idToRender, data }) => {
  //  console.log(data);
  //  console.log(idToRender);
   const renderId = idToRender
   const renderData = data
   const path = `./img/${renderData[renderId-1].filename}`


    // console.log(cachedValue(renderData));
    // console.log(renderData);

  return (
    <div className='details'>
        <Link to="/"><button>Back to the list</button></Link>
        <p>Author: {renderData[renderId-1].author}</p>
        <p>Title: {data[idToRender-1].title}</p>
        <p>Dimensions: {data[idToRender-1].dimensions}</p>
        <p>Source: {data[idToRender-1].museum}</p>
        <p>Type: {data[idToRender-1].type}</p>
        <p>Date: {data[idToRender-1].date}</p>
        <img src={path} alt="" />
        <p className='description'>{data[idToRender-1].description}</p>
    </div>
  )
}

export default Detailedpicture