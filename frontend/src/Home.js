import React from 'react'
import Painting from './Painting'

const Home = ({data, setIdToRender}) => {

    return (
    <div className='containerOfPaintings'>
        <div className="paintings">
            {data.map(x => <Painting key={x.title} data={x} setIdToRender={setIdToRender}/>)}
        </div>
    </div>
  )
}

export default Home