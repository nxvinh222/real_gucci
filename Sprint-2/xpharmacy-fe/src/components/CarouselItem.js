import React from "react";
import { Carousel, Button } from "react-bootstrap"

import 'styles/CarouselItem.css'

function CarouselItem(props) {
    return (

        <div
            className="item"
            style={{ 
                backgroundImage: "url(" + props.data.picture + ")",
            }}
        >

            <Carousel.Caption>                
                <h3 className="pt-3" style={{ fontFamily: "arial" }}>{props.data.title}</h3>
                <p className="lead" >{props.data.text}</p>
                <Button className="col-5 btn-block" size="lg" href={props.data.href} id="carousel-top-button" active>
                    Enter
                </Button>{' '}
            </Carousel.Caption>
        </div>
    );
}

export default CarouselItem;