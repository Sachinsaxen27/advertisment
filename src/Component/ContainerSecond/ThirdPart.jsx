import React from 'react'
import './ThirdPart.css'
import reactangle2 from '../../Image/Intern.png'
import startup from '../../Image/startup.png'
import smart from '../../Image/smart.png'
import ribbon from '../../Image/ribbon.svg'
import future from '../../Image/future.svg'
function ThirdPart() {
    return (
        <>
            <div>
                <div className='divfutureblock'>
                    <div className='divdetailsfuture'>
                        <h1>New-age energy of a Startup <br /> with a strong foundation.</h1>
                        <p>
                            We focus on building websites that not only look great but actually deliver business results.
                        </p>
                        <ul>
                            <li>
                                <i className="fa-regular fa-circle-check" style={{ color: "#000000", marginRight: "10px" }} />
                                <div>
                                    Say goodbye to the hassle—our websites are easy to manage, optimized for performance, and built to convert.
                                </div>
                            </li>
                            <li>
                                <i className="fa-regular fa-circle-check" style={{ color: "#000000", marginRight: "10px" }} />
                                <div>
                                    Stop wasting time and money designing and managing.
                                </div>
                            </li>
                            <li>
                                <i className="fa-regular fa-circle-check" style={{ color: "#000000", marginRight: "10px" }} />
                                <div>
                                    We stand by our work with a commitment to quality, performance, and your happiness—guaranteed.
                                </div>
                            </li>
                        </ul>
                        <button className='buttoninternus'>Inter With Us</button>
                    </div>
                    <img src={future} alt="future" className='imagefuture'/>
                </div>
            </div>
            <div className='thirdpartcontainer'>
                <div className='fourtpartcontainer'>
                    <div className='card'>
                        <div>
                            <img src={startup} alt="" className='imagestartup'  />
                        </div>
                        <div>
                            <br />
                            <h1 style={{ marginTop: "20px" }} className='startupheading'>"A Startup Building for Startups"</h1>
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
                        <div className='div-business' style={{ position: " relative", bottom: "153px" }}>
                            <img src={smart} alt="" className='imagestartup'  />
                            <br />
                            <h1 style={{ marginTop: '21px' }}>Empowering growth through Smart <br /> Digital Solutions</h1>
                            <button className='buttonservice'>See all services <i className="fa-solid fa-arrow-right-long" style={{ color: "#FFD43B" }} /></button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ThirdPart
