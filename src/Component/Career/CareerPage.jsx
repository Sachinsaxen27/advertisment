import React from 'react'
import image1 from '../../Image/career.png'
import './CareerPage.css'
function CareerPage() {
    const scrolldown = () => {
        const element = document.getElementById('openjob')
        element.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <div className='careercard'>
                <div className='carddetial'>
                    <h1>
                        We serve clients with ground <br /> breaking solutions
                    </h1>
                    <button className='workwithus' onClick={scrolldown}>
                        View Openings
                    </button>
                </div>
                <img src={image1} alt="service" />
            </div>
            <div id='openjob'>
                <h1 style={{textAlign:'center',marginTop:"20px",marginBottom:"10px"}}>See our Open Positions</h1>
                <div className='jobsection'>
                    <div className='openingjob'>
                        <h2>Web Developer Intern</h2>
                        <p>Remote · Part Time</p>
                        <button>Apply Now</button>
                    </div>
                    <div className='openingjob'>
                        <h2>UI/UX Design Intern</h2>
                        <p>Remote · Part Time</p>
                        <button>Apply Now</button>
                    </div>
                    <div className='openingjob'>
                        <h2>Digital Marketing Intern</h2>
                        <p>Remote · Part Time</p>
                        <button>Apply Now</button>
                    </div>
                    <div className='openingjob'>
                        <h2>AI Intern</h2>
                        <p>Remote · Part Time</p>
                        <button>Apply Now</button>
                    </div>
                    <div className='openingjob'>
                        <h2>App Development Intern</h2>
                        <p>Remote · Part Time</p>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerPage
