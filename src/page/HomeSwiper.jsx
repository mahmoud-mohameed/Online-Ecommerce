import { Swiper, SwiperSlide } from 'swiper/react';

import Cart from '../components/cart/cart/Cart';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSwiper = ({data}) => {
  return (
     <>
      <Swiper
      key="home-swiper"
      slidesPerView={5}
      loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    
  }}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }}
  

       navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
       {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <Cart item={item} />
        </SwiperSlide>
      ))}
    </Swiper>

        
    
      </>
    
  )
}

export default HomeSwiper