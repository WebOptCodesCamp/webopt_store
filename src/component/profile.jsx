import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Route, Link, useNavigate } from 'react-router-dom';
import jose from "./image/jos.jpg";
const Profile = () =>{
  const navigate = useNavigate();
  return (
    <div className="main">
    
     <header className="head">
        <IoChevronBackSharp size={30} color="blue"onClick={()=>navigate("/")} />
    <div>    <h3 className="tagname">Shopify</h3></div>
    <div>    <h3 className="user">John Doe</h3></div>
    </header>
    <div className="enclose">
    <img src={jose} className="profile"/>
    </div>
    </div>
    
    
    
    );
  
};

export default Profile;