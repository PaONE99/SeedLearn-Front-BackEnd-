import React from 'react'
import { Carousel} from 'bootstrap';
import core1 from "./project/img/core-1.jpg";
import core2 from "./project/img/core-2.jpg";
import core3 from "./project/img/core-3.jpg";
import "./placement.css";
const placement = () => {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={core1} class="d-block w-100 "  alt="core-1"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={core2} class="d-block w-100" alt="core-2"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={core3} class="d-block w-100" alt="core-3"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

<div className='ma'>

<h1 className='he-1'>Meet the Team</h1>
<p className='par-1'>We are a diverse group of individuals united by our passion for education and entrepreneurship. Our team consists of experienced educators, successful entrepreneurs, <br></br>tech enthusiasts, and community builders, all dedicated to making Seed Learn the best platform for learning and innovation.</p>
<p className='par-2'><b>Educational Content:</b> Our library of educational content covers a wide spectrum of topics, from academic subjects to cutting-edge technologies and business strategies.</p>
<p><b>Startup Resources:</b> For entrepreneurs, we provide a range of resources, including business guides, funding opportunities, and access to a supportive community.</p>

<p><b>Idea Sharing:</b> Seed Learn acts as a hub for idea sharing, where users can pitch their startup concepts, gather feedback, and collaborate with like-minded individuals.</p>

<p><b>Expert Guidance:</b> Our team of mentors and experts is here to provide guidance, advice, and support to help learners and entrepreneurs achieve their goals.</p>
</div>


<div className='cmain'>
  <div className='cdleft'>
  <div className="our-serv"> 
        <div className="card">
        <div className="card-image"></div>
        <div className="card-description">
          <h1 className="text-title">CEO</h1>
          {/* <p className="text-title">Educational Content</p> */}
          <p className="text-body"> PavanKumar</p>
        </div>
      </div>
      </div>


<div className="our-serv1"> 
      <div className="card">
        <div className="card-image1"></div>
        <div className="card-description">
          <h1 className="text-title">Instructor</h1>
          {/* <p className="text-title">Educational Content</p> */}
          <p className="text-body"> Ramya</p>
        </div>
      </div>
      </div>

      <div className="our-serv2"> 
      <div className="card">
        <div className="card-image2"></div>
        <div className="card-description">
          <h1 className="text-title">Support</h1>
          {/* <p className="text-title">Educational Content</p> */}
          <p className="text-body"> Siva</p>
        </div>
      </div>
      </div>

      </div>
      </div>
  </div>
  )
}

export default placement