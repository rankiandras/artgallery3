import React, { useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contacts from "./Contacts"
import Admin from "./Admin";
import Detailedpicture from './Detailedpicture'

function App() {
  const [data, setData] = useState([])
  const [idToRender, setIdToRender] = useState(1);
  // console.log(idToRender);
  const [dataToFilter, setDataToFilter] = useState([]);
  // console.log(dataToFilter);
  
  useEffect(() => {
    fetch(`http://localhost:6789/pictures`)
    .then(res => {
      // response is a JSON which is parsed to produce a JavaScript Object using json() method 
      return res.json()
    })
    .then(data => {
      setData(data)
    })
  },[])

  useEffect(() => {
    // console.log(dataToFilter);
    // creating the body of DELETE request
    const bodyToDelete = {"id": `${dataToFilter[0]}`, "filename": `${dataToFilter[1]}`};
    // console.log(bodyToDelete);
    // creating json from bodyToDelete js object
    const bodyToDeleteJSON = JSON.stringify(bodyToDelete)
    // sending the DELETE request to the backend
    fetch('http://localhost:6789/data-delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyToDeleteJSON
    })
    .then((data) => console.log(data));

  }, [dataToFilter])



  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home data={data} setIdToRender={setIdToRender}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/admin' element={<Admin data={data} setDataToFilter={setDataToFilter}/>}/>
        <Route path='/detailed-picture' element={<Detailedpicture idToRender={idToRender} data={data}/>}/>
      </Routes>
    </>
  );
}

export default App;
