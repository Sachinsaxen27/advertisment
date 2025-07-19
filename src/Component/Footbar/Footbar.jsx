import React from 'react';
import logo from '../../Image/cloud.png';
import './Footbar.css';
import { Link } from 'react-router';
function Footbar() {
    return (
        <>
            <div className='footbardiv'>
                <div className='footbarheading' >
                    <h2 style={{padding:'0px',margin:'0px'}}>DesignHacker</h2>
                    <h1 className='footbarh1heading'>Digital Development Studio</h1>
                    <div className='connectmedia'>
                        <div className='socialmedia'>
                            <Link to="https://www.instagram.com/evolancytech/" target='_blank'>
                                <i className="fa-brands fa-square-instagram fa-2xl" style={{ color: "#f53d00" }} />
                            </Link>
                        </div>
                        <div className='socialmedia'>
                            <Link to="https://www.linkedin.com/company/evolancy-technologies/" target='_blank'>
                                <i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#190193" }} />
                            </Link>
                        </div>
                        <div className='socialmedia' >
                            <Link to="https://whatsapp.com/channel/0029VbAyGrTIyPtZRsmone1g" target='_blank'>
                                <i className="fa-brands fa-square-whatsapp fa-2xl" style={{ color: "#00d619" }} />
                            </Link>
                        </div>
                        <div className='socialmedia'>
                            <i className="fa-solid fa-envelope fa-2xl" style={{ color: "#74C0FC" }} />
                        </div>
                    </div>
                </div>
                <div className='detailsblock'>
                    <div className='divdetials'>
                        <h5>Quick Link</h5>
                        <div>
                            <Link to='/about'>
                                About Us
                            </Link>
                        </div>
                        <div>
                            <Link to='/service'>
                                Services
                            </Link>
                        </div>
                        <div>
                            <Link to='/career'>
                                Careers
                            </Link>
                        </div>
                        <div>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className='divdetials'>
                        <h5>Service</h5>
                        <div>
                            Web Design
                        </div>
                        <div>
                            Web Development
                        </div>
                        <div>
                            Digital Marketing
                        </div>
                        <div>
                            AI & Automation
                        </div>
                        <div>
                            App Development
                        </div>
                    </div>
                    <div className='divdetials' style={{ textAlign: 'center' }}>
                        <h5 style={{ marginBottom: "10px" }}>Join Us</h5>
                        <button className='buttoninternship'>
                            <a href='https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAGjhVIdURDU1N1hRU1NCRTZUWDJTV1daUU5IQzRSWC4u&route=shorturl' target='_blank' >Apply For Internship</a>
                        </button>
                    </div>
                </div>
            </div >

        </>


    )
}

export default Footbar
