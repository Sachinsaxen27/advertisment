import React, { useContext, useEffect, useState } from 'react'
import image1 from '../../Image/message.png'
import image2 from '../../Image/Ellipse 6.png'
import image3 from '../../Image/Close.png'
import image4 from '../../Image/Send.png'
import image5 from '../../Image/Cross.png'
import image6 from '../../Image/Chatbot.png'
import './ChatboxPage.css'
function ChatboxPage() {
    const [inputMessage, setMyinputMessage] = useState('')
    const [messagearr, setmyMessagearray] = useState([{ role: "admin", text: 'How can i Help you ?', type: 'text' }, { role: "admin", text: 'Ask me anything!', type: 'text' }])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [boximage, setMyboxImage] = useState(image1)
    const handleSendMessage = () => {
        if (!localStorage.getItem('user-token')) {
            const newMessage = {
                role: "user",
                text: inputMessage,
                type: 'text'
            };
            setmyMessagearray(prev => Array.isArray(prev) ? [...prev, newMessage] : [newMessage]);
            if (localStorage.getItem('user-token') === null) {
                setTimeout(() => {
                    setIsLoggedIn(true);
                    const adminMessage = {
                        role: "admin",
                        type: 'Form',
                        text: ""
                    };
                    setmyMessagearray(prev => [...prev, adminMessage]);
                }, 2000);
                clearTimeout()
            }
            setMyinputMessage('');
            console.log("Enter")
        }
    };
    const handleshowintro = () => {
        let element = document.getElementById('welcomeback');
        const display = window.getComputedStyle(element).display;
        if (display === 'flex') {
            element.style.display = 'none';

        } else {
            element.style.display = 'flex';
        }
    }
    const handlemessagebox = () => {
        let element = document.getElementById('chatboxmessage');
        let element2 = document.getElementById('welcomeback');
        const display = window.getComputedStyle(element).display;
        if (display === 'flex') {
            element.style.display = 'none';
            setMyboxImage(image1)
        } else {
            element.style.display = 'flex';
            element2.style.display = 'none'
            setMyboxImage(image5)
        }
    }

    return (
        <>
            <div>
                <div className='chatboxpop' id='welcomeback'>
                    <img src={image2} alt="user" className='allienuser' />
                    <div className='welcomecontext' >
                        <div className='closebutton'>
                            <img src={image3} alt="close" onClick={handleshowintro} />
                        </div>
                        <div style={{ width: "15.7rem" }}>
                            👋 Want to chat about DesingHacker I'm an chatbot here to help you find your way.
                        </div>
                    </div>
                </div>
                <div className='chatboxborde' onClick={handlemessagebox}>
                    <img src={boximage} alt="message" />
                </div>
            </div>
            <div className='messagecard' id='chatboxmessage' style={{ display: 'none' }}>
                <div className='messagecardheader'>
                    <img src={image2} alt="icond" />
                    HelpNest
                </div>
                <div className='messagearea'>
                    <div className="chat-container">
                        {(localStorage.getItem('user-token') === null) && messagearr?.map((msg, index) => (
                            <div key={index} className={`chatbotlanding ${msg.role === 'user' ? 'user' : msg.type === "Form" ? "" : 'admin'}`}>
                                {msg.type === 'text' && <p>{msg.text}</p>}
                                {((msg.type === 'Form' && isLoggedIn) && !localStorage.getItem('user-token')) &&
                                    <div className='tempraroychat' >
                                        <img src={image2} alt="" />
                                        <div className='teamsmembermessage' style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
                                            <img src={image6} alt="" style={{width:"8rem"}}/>
                                            <p style={{margin:"10px"}} >HelpNest is Under maintenance </p>
                                            <div className='buttonsumbitformchatbox'><button className='thankyou'>Thank You!</button></div>
                                        </div>
                                    </div>}
                            </div>
                        ))}
                    </div>
                    <div className='messageinput'>
                        <textarea name="messagebox" id="messagebox2" cols="45" rows="3" onChange={(e) => setMyinputMessage(e.target.value)} value={inputMessage} placeholder='Write a message' onKeyDown={(event) => event.key === 'Enter' && handleSendMessage()}></textarea>
                        <img src={image4} alt="send" onClick={handleSendMessage} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatboxPage
