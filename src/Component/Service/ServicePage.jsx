import React from 'react'
import './ServicePage.css'
import image7 from '../../Image/user1.jpg'
import image8 from '../../Image/user2.jpeg'
import image9 from '../../Image/user3.avif'
import image10 from '../../Image/user4.avif'
import webdesign from '../../Image/design.png'
import layout from '../../Image/layout.png'
import ai from '../../Image/ai.png'
import digital from '../../Image/digital.png';
import app from '../../Image/app.png';
import service from "../../Image/service.png"
// import designfure from '../../Image/designfure  .avif'
function ServicePage() {
    // const valuearray = [
    //     {
    //         justifyContent: 'flex-start',
    //         flexdirection: "row",
    //         imgage: image2,
    //         class: 'servicevalue',
    //         headig: 'Web Development',
    //         para: "We build fast, scalable websites engineered for results – not just aesthetics.",
    //         li: ['Performance-optimized architectures', 'Conversion-focused functionality', 'Future-proof stacks'],
    //     }, {
    //         justifyContent: 'space-between',
    //         flexdirection: "row-reverse",
    //         imgage: image3,
    //         class: 'servicevalue reserver',
    //         headig: 'Web Designing',
    //         para: "We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences. Whether you're starting from scratch or want to refresh an existing site, our design solutions are tailored to your goals and audience.",
    //     }, {
    //         justifyContent: 'flex-start',
    //         flexdirection: "row",
    //         imgage: image4,
    //         class: 'servicevalue',
    //         headig: 'Digital Marketing',
    //         para: "We create powerful and user-friendly mobile and web applications tailored to your unique goals. From concept to launch, our team focuses on building apps that are fast, functional, and designed for real-world impact.",
    //         li: ['ocial media marketing & management', 'Search engine optimization (SEO)', 'Paid advertising (Google & Meta Ads)'],
    //     }, {
    //         justifyContent: 'space-between',
    //         flexdirection: "row-reverse",
    //         imgage: image5,
    //         class: 'servicevalue reserver',
    //         headig: 'AI and Automation',
    //         para: "We design intelligent systems that streamline workflows and drive smarter decisions. From automating repetitive tasks to building AI-driven solutions, we help businesses embrace the future of technology.",
    //     }, {
    //         justifyContent: 'flex-start',
    //         flexdirection: "row",
    //         imgage: image6,
    //         class: 'servicevalue',
    //         headig: 'App Development',
    //         para: "We build modern, high-performance applications that combine great design with powerful functionality. Whether it's a mobile app, web platform, or a cross-platform solution, we turn your ideas into scalable and secure digital products.",
    //         li: ['End-to-end mobile app development', 'Cross-platform solutions (Android, iOS, Web)', 'Custom backend & API integration'],
    //     }
    // ]
    const teamarray = [
        {
            name: 'Luffy',
            role: 'Web Developer ',
            image: image7
        },
        {
            name: 'Kakarot',
            role: 'Web Designer',
            image: image8
        },
        {
            name: 'Player',
            role: 'App Development',
            image: image9
        },
        {
            name: 'HeyitsMee',
            role: 'AI & Auromation',
            image: image10
        },
    ]
    return (
        <>
            <div>
                <div className='serviceHeading'>
                    <h1>We serve clients with ground breaking solutions</h1>
                    <p>We offer a full range of digital services—each crafted to drive growth, boost efficiency, and elevate your brand.</p>
                </div>
                <div className='servicesection'>
                    <div className='serviceblock'>
                        <div className='newservielook'>
                            <div className='serviceimage'><img src={layout} alt="layout"/></div>
                            <div className='serviceheading'>
                                <h1> Web Designing</h1>
                                <p>We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='newservielook'>
                            <div className='serviceimage'><img src={webdesign} alt="webdesign"/></div>
                            <div className='serviceheading'>
                                <h1> Web Development</h1>
                                <p>We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='newservielook'>
                            <div className='serviceimage'><img src={digital} alt="webdesign"/></div>
                            <div className='serviceheading'>
                                <h1>Digital Marketing</h1>
                                <p>We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='newservielook'>
                            <div className='serviceimage'><img src={ai} alt="webdesign"/></div>
                            <div className='serviceheading'>
                                <h1> AI & Automation</h1>
                                <p>We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='newservielook'>
                            <div className='serviceimage'><img src={app} alt="webdesign"/></div>
                            <div className='serviceheading'>
                                <h1> App Development</h1>
                                <p>We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={service} alt="" />
                    </div>
                </div>
              
                <div className='demolinkdiv'>
                    <div>
                        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Watch Our Promo Video</h1>
                        <p style={{ textAlign: 'center', width: '35rem', margin: 'auto' }}>Grab exclusive deals and limited-time offers to boost your business. Don’t miss out—unlock your savings today!</p>
                    </div>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/8oON21G1Bqg?si=pZ1TMNaJXqHvDJjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div style={{ marginTop: '50px', marginBottom: '20px' }}>
                    <div>
                        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Technical Team</h1>
                        <p style={{ textAlign: 'center', width: '35rem', margin: 'auto' }}>A passionate group of designers, developers, and strategists dedicated to delivering innovative solutions. Together, we combine creativity, technology, and experience to help your business grow.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
                        {teamarray?.map((value, index) => {
                            return <div className='divcard'>
                                <img src={value.image} alt="" style={{ width: '200px' }} />
                                <div className='userdetails'>
                                    <h1>{value.name}</h1>
                                    <p>{value.role}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicePage