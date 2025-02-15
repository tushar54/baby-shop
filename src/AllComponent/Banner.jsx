// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import images
import img from '../assets/banner/cuteboy.jpg';
import img1 from '../assets/banner/awomanandbaby.jpg';
import img2 from '../assets/banner/girlreadingbook.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  AOS.init();
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      // Use responsive classes instead of a fixed width and height.
      className="mySwiper w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] md:h-[600px] rounded-md overflow-hidden"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="flex justify-center items-center w-full h-full"
        >
          <div className="bg-transparent backdrop-blur-lg mt-5 w-72 sm:w-80 p-6 rounded-2xl text-center">
            <p className="flex justify-center items-center text-[#E0CAA1] text-2xl space-x-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p className="text-2xl font-semibold">Welcome to PlayGrow</p>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="flex justify-center items-center w-full h-full relative"
        >
          <div
            data-aos="fade-up"
            className="bg-white w-72 sm:w-80 p-6 flex flex-col gap-5 rounded-2xl absolute top-5 left-5"
          >
            <p className="flex justify-center items-center text-[#E0CAA1] text-2xl space-x-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p className="text-2xl font-semibold">Welcome to PlayGrow</p>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="flex justify-center items-center w-full h-full"
        >
          <div
            data-aos="fade-up"
            className="bg-white w-72 sm:w-80 p-6 flex flex-col gap-5 rounded-2xl mt-10"
          >
            <p className="flex justify-center items-center text-[#E0CAA1] text-2xl space-x-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p className="text-2xl font-semibold">Welcome to PlayGrow</p>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
