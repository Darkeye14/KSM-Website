import React from 'react'
import im1 from '../assets/im1.jpg'
import im2 from '../assets/im2.jpg'
import im3 from '../assets/im3.jpg'


function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={im1} class="d-block w-100" alt="..." height={500}/>
      </div>
      <div class="carousel-item">
        <img src={im2} class="d-block w-100" alt="..." height={500}/>
      </div>
      <div class="carousel-item">
        <img src={im3} class="d-block w-100" alt="..." height={500}/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel
