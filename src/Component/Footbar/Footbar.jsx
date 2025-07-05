import React from 'react';
import logo from '../../Image/cloud.png';
import './Footbar.css';

function Footbar() {
    return (
        <>
            <div className='footbardiv'>
                <div style={{ width: "32.8rem", marginLeft: '50px' }}>
                    <img src={logo} alt="cloud" style={{ width: '100px' }} />
                    <h1>Digital Development Studio</h1>
                </div>
                <div className='detailsblock'>
                    <div className='divdetials'>
                        <h5>Company</h5>
                        <div>About Us</div>
                        <div>Services</div>
                        <div>Careers</div>
                        <div>Contact</div>
                    </div>
                    <div className='divdetials'>
                        <h5>Connect</h5>
                        <div>
                            <a href="https://www.linkedin.com/company/evolancy-technologies/" target='_blank'>
                                Linkedin
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/evolancytech/" target='_blank'>
                                Instagram
                            </a>
                        </div>
                        <div>
                            <a href="https://whatsapp.com/channel/0029VbAyGrTIyPtZRsmone1g" target='_blank'>
                                WhatsApp
                            </a>
                        </div>

                    </div>
                    <div className='divdetials' style={{ textAlign: 'center' }}>
                        <h5 style={{ marginBottom: "10px" }}>Join Us</h5>
                        <button className='buttoninternship'>
                            <a href='https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAGjhVIdURDU1N1hRU1NCRTZUWDJTV1daUU5IQzRSWC4u&route=shorturl' target='_blank' >Apply For Internship</a>
                        </button>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Footbar
