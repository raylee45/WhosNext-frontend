import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Carousel from 'react-bootstrap/Carousel';
import Pictures from '../Pictures/heart.png';
import '../About.css'


const About = () => {
    return (
        <div className= "about">
        <div class ="carousel-wrapper">
        <Carousel axis fade showIndicators>
        <Carousel.Item>
                <div>
            </div>
                <Carousel.Caption>
                   <span className= "text-bold"> WH❤️'S NEXT</span>
                    <p>We made this app to ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style= {{backgroundImage:`url(${Pictures})`, backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height: '90vh'}}>
               
                    
                </div>

                <Carousel.Caption>
                    <h3>Meet the creators</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style= {{backgroundImage:`url(${Pictures})`, backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-epeat', height: '90vh'}}>
                <h3>WH❤️'S NEXT?</h3>
                    
                </div>
                <Carousel.Caption>
                    <h3>Tsung</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style= {{backgroundImage:`url(${Pictures})`, backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height: '90vh'}}>
                <h3>WH❤️'S NEXT?</h3>
                    
                </div>

                <Carousel.Caption>
                    <h3>Ray</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className= "w-100 d-flex flex-column justify-content-center align-items-center text-black" style= {{backgroundImage:`url(${Pictures})`, backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height: '90vh' }}>
                <h3>WH❤️'S NEXT?</h3>
                    
                </div>
                <Carousel.Caption>
                    <h3>Jared</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className= "w-100 d-flex flex-column justify-content-center align-items-center text-black" style= {{backgroundImage:`url(${Pictures})`, backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height: '90vh',  }}>
                    
                </div>

                <Carousel.Caption>
                    <h3>Nadia</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

          


        </Carousel>
</div>
</div>



    )

}

export default About;