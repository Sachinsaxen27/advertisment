import React from 'react'
import './ThirdPart.css'
import reactangle2 from '../../Image/Intern.png'
import startup from '../../Image/startup.png'
import smart from '../../Image/smart.png'
import ribbon from '../../Image/ribbon.svg'
function ThirdPart() {
    return (
        <>
            <div className='thirdpartcontainer'>
                <div className='thirdparsecondcontainer'>
                    <div className='divblockcontent'>
                        <div className='divblockreactangle'>
                            <img src={reactangle2} alt="" />
                        </div>
                        <div>
                            <div className='headincontainer'>
                                <h1>New-age energy of a Startup <br /> with a strong foundation.</h1>
                            </div>
                            <button className='internwithus'>Intern with Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='thirdpartcontainer'>
                <div className='headincontainer'>
                    <h1>We have plans for everyone!.</h1>
                    <p>We started with a strong foundation, then simply built all of the sales <br /> and marketing tools ALL businesses need under one platform.</p>
                </div>
                <div className='fourtpartcontainer'>
                    <div className='card'>
                        <div>
                            <img src={startup} alt="" style={{ width: "30rem", filter: "drop-shadow(2px 4px 6px black)" }} />
                        </div>
                        <div>
                            <br />
                            <h1 style={{ marginTop: "20px" }}>"A Startup Building for Startups"</h1>
                            <div className='listcontainer'>
                                <div className='list' style={{ marginRight: "20px" }}>
                                    <h1 style={{ color: "gold", fontWeight: '300' }}>15+</h1>
                                    <p style={{ fontWeight: '600', marginTop: '2px', fontSize: "20px" }}>Tech Stack Masterd</p>
                                    <p>We hold deep expertise in 15+ production-grade technology stacks.</p>
                                </div>
                                <div className='list'>
                                    <h1 style={{ color: "gold", fontWeight: '300' }}>100%</h1>
                                    <p style={{ fontWeight: '600', marginTop: '2px', fontSize: "20px" }}   >Founder-Led</p>
                                    <p>By founders who've raised funding, for founders building the future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card card-bussiness'>
                        <div className='card-ribbon'>
                            <img src={ribbon} alt="ribbon" className='ribbon' />
                        </div>
                        <div className='div-business' style={{position: " relative", bottom: "153px"}}>
                        <img src={smart} alt="" style={{ width: "30rem", filter: "drop-shadow(2px 4px 6px black)",height:'31.3rem',marginTop:'-25px'}} />
                        <br />
                        <h1  style={{marginTop:'21px'}}>Empowering growth through Smart <br /> Digital Solutions</h1>
                        <button className='buttonservice'>See all services <i className="fa-solid fa-arrow-right-long" style={{ color: "#FFD43B" }} /></button>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default ThirdPart
