import React from "react"; 
import 'styles/Banner.css'


const logoUri =
  "https://i.pinimg.com/originals/8a/17/3a/8a173a60fe0a3a49787b21ad625d7633.jpg";

// const carouselPicture =
//     "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"


function Banner(props) {

  return (
      <div className="hero-banner">
         <div className="hero-text">         
          <img className="bg col-12 p-0" src={logoUri} style={{minHeight: "275px", objectFit: "cover"}}  alt="hero banner"/>
          {/* <div className="hero-text-top text-center">
              <h1 className="display-3 text-center" id="hero-text-detail" >{props.bannerText}</h1>
          </div> */}
        </div>
      </div>

  );
}


export default Banner;
// import React, { Component } from 'react';
// import '../styles/styles.css';

// class Banner extends Component {
//     render() {
//         return (
//             <div className="banner">
//                 <div className="container">
//                     <div className="container hero-banner">
//                         <div id="img1">
//                             <img src="http://i.imgur.com/Hhsmzqe.jpg" style={
//                                 {width: "100%",
//                                 height: "100%",
//                             objectFit: "cover"}}/>
//                         </div>
//                         <div id="img2">
//                             <span style={
//                                 {position: "absolute",
//                                 left: 0,
//                                 fontsize: "2rem",
//                                 margin: "20px"}}>Future</span>

//                             <span style={
//                                 {position: "absolute",
//                                 right: 0,
//                                 fontsize: "2rem",
//                                 margin: "20px"}}></span>

//                             <span style={
//                                 {position: "absolute",
//                                 right: 0,
//                                 fontsize: "2rem",
//                                 margin: "20px"}}>Pharmacy</span>

//                             <span style={
//                                 {position: "absolute",
//                                 right: 0,
//                                 fontsize: "2rem",
//                                 margin: "20px"}}></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Banner;