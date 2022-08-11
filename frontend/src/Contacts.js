import React from 'react'
import { Link } from "react-router-dom";
// import Admin from './Admin';


const Contacts = () => {
  return (
    <div className='App'>
        <h1>This is the contacts page</h1>
          <Link className='link' to="/admin"><p>Log in as administrator</p></Link>
    </div>
  )
}

export default Contacts