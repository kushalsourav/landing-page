import { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
    const [state, setState] = useState({name:"",email:"", message:""})
    const handleSubmit = (e) => {
        e.preventDefault();
         if(state.name !== "" && state.email !== "" && state.message !== "") {
            alert("your respose is been recorded...")
         } else {
            !state.name && alert("please enter your name")
            !state.email && alert("please enter your email")
            !state.message && alert("please enter your message")
         }
    }
  return (
    <div className="container contacts">
       <div className="grid-1-2">
          <div className="contact-us">
            <h4 className="contact-header">Contact US</h4>
            <p>Lorem ipsum dolor sit amet. Street</p>
            <div className="contact-details">
                <div className="contact-data">
                    <span className="contact-type">Email:</span>
                    <span>office@email.com</span>
                </div>
                <div className="contact-data">
                    <span className="contact-type">Phonw:</span>
                    <span>00-233-234</span>
                </div>
                <div className="contact-data">
                    <span className="contact-type">Skype:</span>
                    <span>officem.234</span>
                </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
          <h4 className="contact-header">Contact Form</h4>
          <div className="form"> 
          <div className="contact-inputs">
            <label htmlFor="name">
                your name*
            </label>
            <input type="text" id="name" className="contact-name" placeholder="Enter your name" onChange={(e) => setState({...state, name:e.target.value})}  />
            </div>
            <div className="contact-inputs">
            <label htmlFor="email">
                your email*
            </label>
            <input type="email" id="email" className="contact-email" placeholder="Enter your email" onChange={(e) => setState({...state, email:e.target.value})} />
          </div>
          </div>
          <div className="contact-inputs">
            <label htmlFor="textarea">your message*</label>
            <textarea className="contact-message" placeholder="Enter your message" rows={10} cols={22}  onChange={(e) => setState({...state, message:e.target.value})}  ></textarea>
          </div>
          <button className="contact-button">send message</button>
          </form>
       </div>
    </div>
  );
};

export default ContactUs;