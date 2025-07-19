import React from 'react'
import menu from '../../Image/menu.png'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const handlemenuOpen=()=>{
        const element=document.getElementById('menudiv')
        if(element.style.display==='none'|| element.style.display===''){
            element.style.display='flex'
        }else{
            element.style.display='none'
        }
    }
    return (
        <>
            <div id='navbarmaindiv'>
                <div className='divlogo1'>
                    <Link to='/' style={{textDecoration:'none',color:'black'}}>
                    <h1>DesignHackers</h1>
                    </Link>
                    <img src={menu} alt="menu" className='menuimage' onClick={handlemenuOpen} />
                </div>
                <div className='divloginsignupbutton' id='menudiv'>
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
