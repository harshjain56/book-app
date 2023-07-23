import React, { useState } from "react";
import Logo from "../Images/Logo.jpg"
import {CiSearch} from "react-icons/ci"

import Perosn from"../Images/Person.jpg"

const Navbar =({setQuerry})=>{
    let [search , setSearch]=useState("")
    
    return(
        <div className="navbar">
            <div className="left-navbar">
              <img src ={Logo} alt="logo"/>
               <span style={{fontSize: "40px", fontFamily:'Roboto',}}>KeazoN </span>
               <span style={{fontSize:"25px", color:"gray",fontFamily:'Roboto' }}>BOOKS</span>

            </div>

            <div className="middle-navbar">
              <div className="searchbar">
              <h1><CiSearch/></h1>
              <input type="text" placeholder="Search for the book you want and read it now ......" onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
              </div>

              <button onClick={()=>{setQuerry(search)}}>Search</button>

            </div>


            <div className="right-navbar">
            <img src={Perosn}/>
            <img src={Perosn}/>
            <img src={Perosn}/>

            </div>
            
        </div>
    )
}


export default Navbar
