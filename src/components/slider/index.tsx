import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";


interface SliderProps {
  settings: SwiperProps;
  children: React.ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      {...settings}
    >
      {children}
    </Swiper>
  )
}