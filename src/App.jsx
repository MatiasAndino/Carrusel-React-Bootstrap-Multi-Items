import React from "react"
import Carrusel from "./components/Carrusel"

function App() {
  
  const PATH = './src/images/'
  const imagenes = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg',
  '10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg',]

  let items = document.querySelectorAll('.carousel .carousel-item')

  // items.forEach((el) => {
  //     // number of slides per carousel-item
  //     const minPerSlide = 4;
  //     let next = el.nextElementSibling
  //     for (let i=0; i<minPerSlide; i++) {
  //         if (!next) {
  //             // wrap carousel by using first child
  //             next = items[0]
  //         }
  //         let cloneChild = next.cloneNode(true)
  //         el.appendChild(cloneChild.children[0])
  //         next = next.nextElementSibling
  //     }
  // })

  return (

    <Carrusel />

    // <div className="bg-dark text-light">
    //   <div id="carouselExample" className="carousel slide">
    //     <div className="carousel-inner">
    //       {
    //         imagenes.map( (imagen, index) => (
    //           <div className={ `carousel-item ${ index === 0 && 'active' }` } key={ imagen }>
    //             <img className='img-flush' src={ PATH+imagen } alt={ imagen } />
    //           </div>
    //         ))
    //       }
    //     </div>
    //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
  )
}

export default App
