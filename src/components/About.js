import React from 'react';
import '../About.css'

const About = () => {
    return (
 
        <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-50" src="https://cdn.pixabay.com/photo/2012/04/26/19/43/arrow-42916_1280.png" alt="Who's Next?"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Meet the Creators"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Tsung"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Ray"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Jared"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Nadia"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    
    )

}

export default About;