import React from 'react';


const Footer = () => {
  return (
    <div className='container-fluid  pt-5' style={{backgroundColor:"#252B42"}}>
        <div className="row text-white">
            <div className="col-3">
                <h3>Get In Touch</h3>
                <p>the quick fox jumps over the <br />lazy dog</p>
                
               
            </div>
            <div className="col-3">
                <h3>Company Info</h3>
                <p>About Us </p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div className="col-3">
                <h3>Features</h3>
                <p>Business Marketing </p>
                <p>User Analytic </p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
            </div>
            <div className="col-3">
                <h3>Ressources</h3>
                <p>IOS & Android </p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
            </div>
            
        </div>
        <div className="row bg-white pt-5">
            <p>Made With Love By Figmaland All Right Reserved &copy;</p>
        </div>
    </div>
  )
}

export default Footer