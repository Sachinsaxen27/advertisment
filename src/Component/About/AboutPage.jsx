import React from 'react'
import './AboutPage.css'
import error from '../../Image/error.png'
function AboutPage() {
    return (
        <>
            <div className='diverror'>
                <img src={error} alt="" className='errorimage'/>
                <div>
                    <h1>The Page Does Not Exist</h1>
                    <p>Sorry, the page you are looking for could not be found. It's still under construction.</p>
                </div>
            </div>
        </>
    )
}

export default AboutPage
