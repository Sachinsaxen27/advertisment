import React from 'react'
import image1 from '../../Image/career.jpg'
import './CareerPage.css'
function CareerPage() {
    const scrolldown = () => {
        const element = document.getElementById('openjob')
        element.scrollIntoView({ behavior: 'smooth' })
    }
    const rolearray = [
        {
            job: 'Web Developer Intern',
            remote: "Part Time"
        },
        {
            job: 'UI/UX Design Intern',
            remote: "Part Time"
        },
        {
            job: 'Digital Marketing Intern',
            remote: "Part Time"
        },
        {
            job: 'AI Intern',
            remote: "Part Time"
        },
        {
            job: 'App Development Intern',
            remote: "Part Time"
        },
    ]
    return (
        <>

            <div>
                <div className='headingdiv'>
                    <div>
                        <h1>Join a Team That Builds with Purpose</h1>
                        <button type="button" className="btn" onClick={scrolldown}>See Open Role</button>
                    </div>
                    <img src={image1} alt="" className='imagecareer'/>
                </div>
                <div className='whyus'>
                    <div className='rolesection'>
                        <div>
                            <i className="fa-solid fa-arrow-up-right-dots" style={{ color: "#FFD43B" }} />
                            <h4>
                                Growth & Learning Opportunities
                            </h4>
                        </div>
                        <p>Unlock endless opportunities to upskill through workshops</p>
                    </div>
                    <div className='rolesection'>
                        <div>

                            <i className="fa-solid fa-heart" style={{ color: "#FFD43B" }} />
                            <h4>
                                Collaborative & Inclusive Culture
                            </h4>
                        </div>
                        <p>Work in a supportive, diverse environment where collaboration and innovation thrive</p>
                    </div>
                    <div className='rolesection'>
                        <div>
                            <i className="fa-solid fa-lightbulb" style={{ color: "#FFD43B" }} />
                            <h4>
                                Meaningful Work with Real Impact
                            </h4>
                        </div>
                        <p>Contribute to real-world solutions that make a difference for people, businesses, and communities.</p>
                    </div>
                </div>
                <div id='openjob'>
                    <h1 style={{ textAlign: 'center',marginTop:'40px',marginBottom:'20px' }}>Open Role</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {rolearray?.map((value, index) => {
                            return <div key={index} className='openrolediv '>
                                <div>
                                    <h1>{value.job}</h1>
                                    <p>Remote:{value.remote}</p>
                                </div>
                                <button>Apply Now</button>
                            </div>
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}

export default CareerPage
