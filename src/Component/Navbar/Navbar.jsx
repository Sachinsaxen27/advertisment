import React from 'react'
import cloud from '../../Image/cloud.png'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div id='navbarmaindiv'>
                <div className='divlogo1'>
                    <Link to='/'>
                        <img src={cloud} alt="Hubly" id='image1' />
                    </Link>
                </div>
                <div className='divloginsignupbutton'>
                    <Link to='/about'><button className='buttonlogin'>About Us</button></Link>
                    <Link to='/service'> <button className='buttonlogin'>Services</button></Link>
                    <Link to='/career'> <button className='buttonlogin'>Careers</button></Link>
                    <Link to='/contact'> <button className='buttonlogin'>Contact</button></Link>
                    <Link to='https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAGjhVIdURDU1N1hRU1NCRTZUWDJTV1daUU5IQzRSWC4u&route=shorturl' target='_blank'> <button className='intershipbutton'>Internships</button></Link>
                </div>

            </div>
        </>
    )
}

export default Navbar
