import img_1 from "../../assets/images/banner/1.jpg";
import img_2 from "../../assets/images/banner/2.jpg";
import img_3 from "../../assets/images/banner/3.jpg";
import img_4 from "../../assets/images/banner/4.jpg";
import img_5 from "../../assets/images/banner/5.jpg";
import img_6 from "../../assets/images/banner/6.jpg";
import Slider from "../Slider/Slider";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <Slider slideId='slide1' img={img_1} prev="#slide6" next="#slide2"></Slider>
      <Slider slideId='slide2' img={img_2} prev="#slide1" next="#slide3"></Slider>
      <Slider slideId='slide3' img={img_3} prev="#slide2" next="#slide4"></Slider>
      <Slider slideId='slide4' img={img_4} prev="#slide3" next="#slide5"></Slider>
      <Slider slideId='slide5' img={img_5} prev="#slide4" next="#slide6"></Slider>
      <Slider slideId='slide6' img={img_6} prev="#slide5" next="#slide1"></Slider>
     
    </div>
  );
};

export default Banner;
