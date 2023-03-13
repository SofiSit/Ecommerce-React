import Carousel from 'react-bootstrap/Carousel';
import i1 from '../../assets/images/trabajo-artesanal-profesional-taller(1).jpg';
import i2 from '../../assets/images/recipiente-plato-ceramica-pintados-mesa-madera.jpg';
import i3 from '../../assets/images/primer-plano-manos-alfarero-femenino-arcilla-rueda-alfareria.jpg'

const CarouselProduct = () => {
    
  return (
   
      <Carousel className='carousel'>
        <Carousel.Item>
                  <img className="carousel.item" src={i1} alt="First slide" />
          <Carousel.Caption>
            <h3>Hand modeling</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel.item" src={i2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Oxide Mixtures</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                  <img className='carousel.item' src={i3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Pottery course with wheel</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
  );
};

export default CarouselProduct;