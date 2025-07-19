import React, { useEffect } from 'react'
import './FirstPart.css'
import SecondPart from './SecondPart'
import ThirdPart from '../ContainerSecond/ThirdPart'
import hero from '../../Image/hero.svg'
import ChatboxPage from '../Chatbox/ChatboxPage'
function FirstPart() {
    return (
        <>
            <div className='divFirstPart'>
                <div>
                    <div className='slideHeading'>
                        <h1 className='h1heading'>DIGITAL DEVELOPMENT STUDIO</h1>
                        <p className='categoryname'>We create high-performance websites and strategic digital solutions that drive growth and deliver tangible business outcomes</p>
                    </div>
                    <div className='buttondivs'>
                        <button className='rightarrow'>We're Hiring - Join the Team</button>
                        <button className='playbutton'>See all Services</button>
                    </div>
                </div>
                <div>
                    <div className='slideHeadingsecond'>
                        <img src={hero} alt="image" className='imagehero' />
                    </div>
                </div>
            </div>
            <SecondPart />
            <ThirdPart />
            <ChatboxPage/>
        </>
    )
}

export default FirstPart
