import React from 'react'

const Carrusel = () => {

    const minItems = 4;
    const total = 20;
    const iteraciones = Math.ceil(total / minItems)

    const PATH = './src/images/'
    const imagenes = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg',
    '10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg',]

    const elements = [...Array( iteraciones )].map((_, index) => {
        return [...Array( minItems )].map((_, i) => imagenes[i + (minItems * index)]);
    });

  return (
    <div id="carouselExample" className="carousel slide bg-success">
        <div className="carousel-inner">
            {
                elements.map((element, index) => {
                    return (
                        <div className={ `carousel-item ${ index === 0 && 'active' }` } key={ element }>
                            {
                                element.map( imagen => (
                                    imagen === undefined 
                                    ? <></>  
                                    : <img className='img-flush' src={ PATH+imagen } alt={ imagen } />
                                ))
                            }
                        </div>
                    )
                })
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carrusel