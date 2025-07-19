import React from 'react'
import './ContactPage.css'
import user from '../../Image/user.png'
import telephone from '../../Image/telephone.png'
import mail from '../../Image/mail.png'
import message from '../../Image/comment.png'
import title from '../../Image/title.png'
import location from '../../Image/location.png'
import mobile from '../../Image/mobile.png'
import email from '../../Image/email.png'
function ContactPage() {
    return (
        <>
            <div className='connectdiv'>
                <div>
                    <form>
                        <div className='forminput'>
                            <label htmlFor="name">
                                <span>
                                    Name
                                </span>
                                <input type="text" name="name" id="username" placeholder='Name' />
                                <img src={user} alt="" className='inputimage' />
                            </label>
                            <label htmlFor="email">
                                <span>
                                    Email
                                </span>
                                <input type="text" name="email" id="useremail" placeholder='Email' />
                                <img src={mail} alt="" className='inputimage' />
                            </label>
                        </div>
                        <div className='forminput'>

                            <label htmlFor="number"><span>
                                Number
                            </span>
                                <input type="number" name="number" id="usernumber" placeholder='Number' />
                                <img src={telephone} alt="" className='inputimage' />
                            </label>
                            <label htmlFor="subject"><span>
                                Subject
                            </span>
                                <input type="text" name="subject" id="usersubject" placeholder='Subject' />
                                <img src={title} alt="" className='inputimage' />
                            </label>
                        </div>
                        <label htmlFor="messagearea"><span>
                            Message
                        </span>
                            <textarea  name="messagearea" id="usermessagearea" cols="79" rows="10" placeholder='Message'></textarea>
                            <img id='textareaimage' src={message} alt="" className='inputimage' />
                        </label>
                        <button type="submit" className='submitbutton'>Submit</button>
                    </form>
                </div>
                <div className='connectheadingdiv'>
                    <div className='connectheading'>
                        <h1>Get in touch</h1>
                        <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div>
                    <div>
                        <div className='contactdetails'>
                            <div className='divimageconnect'><img src={mobile} alt="" /></div>
                            <div>+91-73555-XXXXX</div>
                        </div>
                        <div className='contactdetails'>
                            <div className='divimageconnect'><img src={email} alt="" /></div>
                            <div>mymail@gmail.com</div>
                        </div>
                        <div className='contactdetails'>
                            <div className='divimageconnect'><img src={location} alt="" /></div>
                            <div>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
