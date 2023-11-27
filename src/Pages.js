import React from 'react';
import './Greet.css'
function Pages() {
  
  function send() {
    const name = (document.getElementById('info'));
    const email = (document.getElementById('input'));
    const num = (document.getElementById('num'));
    const text = (document.getElementById('tex'));
    const all = name.value + email.value + num.value + text.value;
    if (all === "") {
       alert('please enter something');
     } else {
       alert(`${name.value} thank you `)
     
     } 
  }
 
    return (
      <div className="touch">
        <h1 className="get">Get In Touch</h1>
        <p>Your email address will not be</p>
        <p className="public">published</p>
        <input className="info" type="text" id='info' placeholder='Name' required></input><br></br><hr className='span'></hr>
        <input className="input"type="email" id='input' placeholder='E-mail' required></input><br></br><hr className='span'></hr>
        <input className="input"type="number" id='num' placeholder='Phone number' required></input><br></br><hr className='span'></hr>
        <input className="input" type="text" id='tex' placeholder='Message' required></input><hr className='span'></hr> <br></br>
        <button className='send'  onClick={send}>SEND US</button>
      </div>
    );
  }


export default Pages