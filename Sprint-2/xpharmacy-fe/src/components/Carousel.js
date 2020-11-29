import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap"
import 'styles/Carousel.css'

import CarouselItem from 'components/CarouselItem'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// Pseudo Data Import 
import CarouselData from 'PseudoData/CarouselData'


function ControlledCarousel() {
    //Init State
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([])

    // ComponentDidMount
    // Call API
    useEffect(() => {
        setData(CarouselData)
    }, []);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    // Return all Carousel's items
    // Khong hieu tai sao phai kiem tra data khi doi sang OwlCarousel trong khi luc truoc khong can??? 
    return data.length > 0 ? (
        <div className="intro-carousel">
            <Container className="hero-text-carousel col-sm-11 col-md-9 col-lg-7">
                <OwlCarousel
                    className="owl-theme"
                    activeIndex={index}
                    onSelect={handleSelect}
                    items={1}
                    margin={10}
                >
                    {/* Map data with item */}
                    {data.map((itemInfo, i) => 
                                <CarouselItem data={itemInfo} key={i}/>
                            )
                    }
                    {/* // */}
                </OwlCarousel>
            </Container>
        </div>

    ) : null;
}

export default ControlledCarousel;

// import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap';

// class Slide extends Component {
//     render() {
//         return (
//             <div>
//                 <Carousel>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="https://i.pinimg.com/originals/dd/3a/5b/dd3a5b37003c3c3b338cfa7ba8f0829b.jpg"
//                         alt="First slide"
//                         />
//                         <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="https://i.pinimg.com/originals/11/35/bd/1135bddbf33983c9f7c2188e854c0cba.jpg"
//                         alt="Third slide"
//                         />

//                         <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                         className="d-block w-100"
//                         src="https://i.redd.it/9hzo8m4a0e721.png"
//                         alt="Third slide"
//                         />

//                         <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//             </div>
//         );
//     }
// }

// export default Slide;