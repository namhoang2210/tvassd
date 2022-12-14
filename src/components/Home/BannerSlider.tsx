import "swiper/css/pagination";

import Link from "next/link";
import { FC } from "react";
import { Autoplay , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ImageFade from "../Shared/ImageFade";

interface SliderProps {
  images: {
    title: string;
    image: string;
    link: string;
  }[];
}

const BannerSlider: FC<SliderProps> = ({ images }) => {
  return (
    <Swiper
      className="rounded-lg overflow-hidden"
      modules={[Pagination, Autoplay]}
      pagination={true} 
      loop
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
    >
      {images.map((item) => (
        <SwiperSlide key={item.image}>
          <Link href={item.link}>
            <a className="block w-full h-0 pb-[42%] relative">
              <ImageFade
                width={900}
                height={400}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
                src={item.image}
                alt=""
              />
              <h1 className="scale-100 absolute left-[6%] bottom-[70%] md:bottom-[10%] text-lg md:text-3xl xl:text-4xl font-semibold max-w-[86%] whitespace-nowrap overflow-hidden text-ellipsis">
                {item.title}
              </h1>
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
