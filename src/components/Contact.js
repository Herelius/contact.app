import React from "react";
import "./Contact.css";

const name = "John Smith";
const avatar = "https://avatars.githubusercontent.com/u/78567400?s=400&v=4";
const online = false;

const Contact = () => (
  <>
    <div className="Contact">
      <img className="avatar" src={avatar} alt={name}></img>
      <div className="status">
        <h3 className="name">{name}</h3>
        <div className={online ? "status-online" : "status-offline"}></div>
        <p className="status-text">{online ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  </>
)

export default Contact;