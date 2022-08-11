import React, { useState } from 'react'
import ItemToDelete from './ItemToDelete';


const Admin = ({ data, setDataToFilter }) => {
  // console.log(data);
  const pictures = data;
  const [dataToDelete, setDataToDelete] = useState([]);
  // const [idToFilter, setIdToFilter] = useState(0)

  const useSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', e.target.querySelector(`input[name='title']`).value)
    formData.append('author', e.target.querySelector(`input[name='author']`).value)
    formData.append('date', e.target.querySelector(`input[name='date']`).value)
    formData.append('type', e.target.querySelector(`input[name='type']`).value)
    formData.append('dimensions', e.target.querySelector(`input[name='dimensions']`).value)
    formData.append('museum', e.target.querySelector(`input[name='museum']`).value)
    formData.append('filename', e.target.querySelector(`input[name='picture']`).files[0].name)
    formData.append('picture',  e.target.querySelector(`input[name='picture']`).files[0])
    formData.append('description', e.target.querySelector(`textarea`).value)

    const fetchSettings = {
      method: 'POST',
      body: formData
    };

    fetch('http://localhost:6789/data-upload', fetchSettings)
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const searchInTitle = (e) => {
    e.preventDefault()
    setDataToDelete(pictures.filter(picture => picture.title.includes(`${e.target.querySelector('input[type=text]').value}`)))
  }

  return (
    <div id='admin'>
      <div className='adminForm'>
          <p>Administration form</p>
          <form onSubmit={useSubmit}>
              <label htmlFor="">Title</label><br />
              <input type="text" placeholder='Title' name='title'/><br />
              <label htmlFor="">Author</label><br />
              <input type="text" placeholder='Full Name of Author' name='author'/><br />
              <label htmlFor="">Date</label><br />
              <input type="text" placeholder='Date of Creation' name='date'/><br />
              <label htmlFor="">Type</label><br />
              <input type="text" placeholder='Details of technique' name='type'/><br />
              <label htmlFor="">Dimensions</label><br />
              <input type="text" placeholder='Dimensions in cm' name='dimensions'/><br />
              <label htmlFor="">Museum</label><br />
              <input type="text" placeholder='Name of Institution, City' name='museum'/><br />
              <label htmlFor="">File to Upload</label><br />
              <input type="file"  name='picture'/><br />
              <label htmlFor="">Description</label><br />
              <textarea placeholder='Description in Details' name='description'></textarea><br />
              <button>Upload</button><br />
          </form>
      </div>
      <div className='search'>
        <form action="" onSubmit={searchInTitle}>
          <input type="text" placeholder='Search in Titles'/>
          <button>Search</button>
        </form>
        {dataToDelete && dataToDelete.map(x => <ItemToDelete key={x.title} author={x.author} title={x.title} id={x.id} filename={x.filename} setDataToFilter={setDataToFilter}/>)}
      </div>
    </div>
  )
}

export default Admin