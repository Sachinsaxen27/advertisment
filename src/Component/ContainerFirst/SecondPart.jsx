import React from 'react'
import './SecondPart.css'
import image4 from '../../Image/layer.svg'
import image5 from '../../Image/wand.svg'
import image6 from '../../Image/heart.svg'
function SecondPart() {
  return (
    <div className='SecondPartcontainer'>
      <div className='headingdiv'>
        <h1>
          Specializing In
        </h1>
        <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: "20px  " }}>
        <div className='servicediv'>
          <img src={image4} alt="" />
          <div>
            <h1>Web Development</h1>
            <p>We build fast, secure, and responsive websites tailored to your business goals</p>
          </div>
        </div>
        <div className='servicediv'>
          <img src={image5} alt="" />
          <div>
            <h1>
              Web Desinging
            </h1>
            <p>Bringing ideas to life with modern, intuitive, and eye-catching web designs</p>
          </div>
        </div>
        <div className='servicediv'>
          <img src={image6} alt="" />
          <div>
            <h1>
              Digital Marketing
            </h1>
            <p>Fueling business growth through targeted ads, content strategies, and powerful online campaigns.</p>
          </div>
        </div>
        <div className='servicediv'>
          <img src={image6} alt="" />
          <div>
            <h1>
              AI & Automation
            </h1>
            <p>Streamline your workflow with smart AI tools and automated processes.</p>
          </div>
        </div>
        <div className='servicediv'>
          <img src={image6} alt="" />
          <div>
            <h1>
              App Development
            </h1>
            <p>We build fast, reliable, and user-friendly mobile apps tailored to your business needs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPart
