import React from 'react'
import './ContactPage.css'
function ContactPage() {
    return (
        <>
            <div style={{marginTop:'50px',marginLeft:'70px'}}>
                <div className='headincontact'>
                    <h1>Have a question ? Let’s get in touch with us.</h1>
                    <div style={{marginLeft:"20px"}}>
                        <h4>Contact Us</h4> <p>ceo@evolancy.in</p>
                    </div>
                </div>
                <div className='formdivstart'>
                    <p>Fill up the Form and our team will get back to you.</p>
                    <form>
                        <input type="text" name="fname" id="fname" placeholder='First Name'/>
                        <input type="text" name="lname" id="lname" placeholder='Last Name'/>
                        <input type="email" name="email" id="email" placeholder='Email Id'/>
                        <input type="number" name="number" id="number"placeholder='Mobile Number'/>
                        <textarea name="message" id="" col="50" rows="10"placeholder='Type Message'></textarea>
                        <button className='formsubmit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage
