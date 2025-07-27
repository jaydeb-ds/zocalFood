import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../assets/carousal_img_1.jpg';
import img2 from '../../assets/carousal_img_2.jpg';
import img3 from '../../assets/carousal_img_3.webp';



function Carouselhome() {

  const img = [img3, img2, img1];

  return (
    <>
      <div className='mt-4' >
        <Carousel data-bs-theme="bright" className="max-w-[1500px] rounded-2xl mx-auto ">
          <Carousel.Item>
            <img
              className="d-block w-100 md:h-[550px] h-[300px] rounded-2xl object-cover overflow-hidden"
              src={img[0]}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 md:h-[550px] h-[300px] rounded-2xl object-cover overflow-hidden"
              src={img[1]}
              alt="Second slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 md:h-[550px] h-[300px] rounded-2xl object-cover overflow-hidden "
              src={img[2]}
              alt="Third slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carouselhome;