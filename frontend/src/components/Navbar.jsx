import React from "react";
//import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <div className="main">
          <div className="container">
            LetsConnect.
          </div>
        </div>
        <ul>
       
          <li>
            <a href="/">Home</a>
          </li>
          
          <li>
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/contribute">Contribute</a>
          </li>
          
          <li>
            <a href="/helpdesk">Helpdesk</a>
          </li>
        </ul>
        </>
    );
  }