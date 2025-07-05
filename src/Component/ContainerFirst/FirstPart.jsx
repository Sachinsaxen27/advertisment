import React from 'react'
import './FirstPart.css'
import image1 from '../../Image/Herosection.png'
import SecondPart from './SecondPart'
import ThirdPart from '../ContainerSecond/ThirdPart'
import india from '../../Image/ChatGPT.png'
function FirstPart() {
    return (
        <>
            <div className='divFirstPart'>
                <div>
                    <div className='slideHeading'>
                        <h1 className='h1heading'>DIGITAL DEVELOPMENT STUDIO</h1>
                        <p className='categoryname'>We build high performance websites and growth-driven digital strategies <br /> that deliver measurable business results</p>
                    </div>
                    <div className='buttondivs'>
                        <button className='rightarrow'>We're Hiring - Join the Team</button>
                        <button className='playbutton'>See all Services</button>
                    </div>
                    <div>
                        <img src={india} alt="" style={{width:"500px",marginTop:"60px"}}/>
                    </div>
                </div>
                <div>
                    <div className='slideHeadingsecond'>
                        <img src={image1} alt="image" style={{ width: '30rem',height:'25rem' }} />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SecondPart />
            <ThirdPart />
        </>
    )
}

export default FirstPart
