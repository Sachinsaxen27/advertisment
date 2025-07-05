import React from 'react'
import image1 from '../../Image/service1.png'
import image2 from '../../Image/service2.png'
import image3 from '../../Image/service3.png'
import image4 from '../../Image/service4.png'
import image5 from '../../Image/service5.png'
import image6 from '../../Image/service6.png'
import './ServicePage.css'
function ServicePage() {
    const valuearray = [
        {
            justifyContent: 'flex-start',
            flexdirection: "row",
            imgage: image2,
            class: "carddetials",
            headig: 'Web Development',
            para: "We build fast, scalable websites engineered for results – not just aesthetics.",
            li: ['Performance-optimized architectures', 'Conversion-focused functionality', 'Future-proof stacks'],
        }, {
            justifyContent: 'space-between',
            flexdirection: "row-reverse",
            imgage: image3,
            class: "carddetial",
            headig: 'Web Designing',
            para: "We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences. Whether you're starting from scratch or want to refresh an existing site, our design solutions are tailored to your goals and audience.",
        }, {
            justifyContent: 'flex-start',
            flexdirection: "row",
            imgage: image4,
            class: "carddetials",
            headig: 'Digital Marketing',
            para: "We create powerful and user-friendly mobile and web applications tailored to your unique goals. From concept to launch, our team focuses on building apps that are fast, functional, and designed for real-world impact.",
            li: ['ocial media marketing & management', 'Search engine optimization (SEO)', 'Paid advertising (Google & Meta Ads)'],
        }, {
            justifyContent: 'space-between',
            flexdirection: "row-reverse",
            imgage: image5,
            class: "carddetial",
            headig: 'AI and Automation',
            para: "We design intelligent systems that streamline workflows and drive smarter decisions. From automating repetitive tasks to building AI-driven solutions, we help businesses embrace the future of technology.",
        }, {
            justifyContent: 'flex-start',
            flexdirection: "row",
            imgage: image6,
            class: "carddetials",
            headig: 'App Development',
            para: "We build modern, high-performance applications that combine great design with powerful functionality. Whether it's a mobile app, web platform, or a cross-platform solution, we turn your ideas into scalable and secure digital products.",
            li: ['End-to-end mobile app development', 'Cross-platform solutions (Android, iOS, Web)', 'Custom backend & API integration'],
        }
    ]
    return (
        <>
            <div>
                <div className='servicecard'>
                    <div className='carddetial'>
                        <h1>
                            We serve clients with ground <br /> breaking solutions
                        </h1>
                        <a href="/about" target='_blank'>
                            <button className='workwithus'>
                                Work With US
                            </button>
                        </a>
                    </div>
                    <img src={image1} alt="service" />
                </div>
                {
                    valuearray?.map((value, index) => {
                        return <div className='servicecard' style={{ justifyContent: `${value.justifyContent}`, flexDirection: `${value.flexdirection}` }}>
                            <img src={value.imgage} alt="service" />
                            <div className={value.class}>
                                <h1>
                                    {value.headig}
                                </h1>
                                <p style={{ width: '39rem' }}>{value.para}</p>
                                <ul>
                                    {value.li?.map((elemnet, index) => {
                                        return <li key={index}>{elemnet}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default ServicePage