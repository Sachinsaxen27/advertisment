import React from 'react'
import './SecondPart.css'
import image4 from '../../Image/layer.svg'
import image5 from '../../Image/wand.svg'
import image6 from '../../Image/heart.svg'
function SecondPart() {
  return (
    <div className='SecondPartcontainer'>
      <div>
        <h1>
          We are building software solution that solves <br /> your business challenges
        </h1>
      </div>
      <div className='secondPartWork'>
        <div>
          <img src={image4} alt="Airtable" />
          Web Development
        </div>
        <div>
          <img src={image5} alt="Elastic" />
          Web Desinging
        </div>
        <div>
          <img src={image6} alt="Framer" />
          Digital Marketing
        </div>
      </div>
    </div>
  )
}

export default SecondPart
