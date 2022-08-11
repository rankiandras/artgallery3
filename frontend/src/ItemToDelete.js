import React from 'react'

const ItemToDelete = ({ author, title, id, filename, setDataToFilter }) => {

    

    const path = `./img/${filename}`;

    const deletePicture = () => {
        setDataToFilter([id, filename])
        // console.log([id, filename]);

    }

  return (
    <div className='itemToDelete'>
        <p>Author: {author}</p>
        <p>Title: {title}</p>
        <img src={path} alt="" /><br />
        <button onClick={deletePicture}>Delete this item</button>
    </div>
  )
}

export default ItemToDelete