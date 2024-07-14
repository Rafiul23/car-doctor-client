import { useLoaderData } from "react-router-dom";
import serviceImg from "../../assets/images/checkout/checkout.png";
import playImg from '../../assets/icons/Vector-1.png';
import circle from '../../assets/icons/circle.png';
import "./service.css";
const ServiceDetails = () => {
  const serviceData = useLoaderData();

  const { img, title, description, facility } = serviceData;

  console.log(serviceData);

  return (
    <div>
      <div className="relative">
        <img src={serviceImg} alt="service image" className="w-full" />
        <h2 className="font-bold absolute top-[42%] left-12 text-white text-5xl ">
          Service Details
        </h2>
        <div className="text-center text-white bg-[#ff3811] absolute bottom-0 left-[45%] font-medium trapezoid px-[52px] py-4">
          Home/Service Details
        </div>
      </div>
      <div className="my-20 grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="col-span-3">
          <img src={img} alt="" className="w-full" />
          <h2 className="text-4xl my-5 font-bold">{title}</h2>
          <p className="mb-4">{description}</p>
          <div className="grid grid-cols-2 gap-4">
            {facility.map((advantage) => (
              <div className="bg-base-200 p-6 rounded-lg border-t-2 border-[#ff3811]">
                <h3 className="font-bold text-2xl my-2">{advantage.name}</h3>
                <p>{advantage.details}</p>
              </div>
            ))}
          </div>
          <p className="my-4">{description}</p>
          <h2 className="text-4xl my-5 font-bold">3 Simple Steps to Process</h2>
          <p className="my-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              <div className="p-5 border-2 border-blue-300 rounded-lg">
                <div className=" text-center bg-[#ff3711] rounded-full mt-4 w-16 h-16 mx-auto shadow-xl">
                  <h2 className="mt-4 inline-block text-white text-xl font-bold">01</h2>
                </div>
                <h2 className="text-xl font-bold text-center my-6">STEP ONE</h2>
                <p className="text-center pb-2">It uses a dictionary <br /> of over 200 .</p>
              </div>
              <div className="p-5 border-2 border-blue-300 rounded-lg">
                <div className=" text-center bg-[#ff3711] rounded-full mt-4 w-16 h-16 mx-auto shadow-xl">
                  <h2 className="mt-4 inline-block text-white text-xl font-bold">02</h2>
                </div>
                <h2 className="text-xl font-bold text-center my-6">STEP TWO</h2>
                <p className="text-center pb-2">It uses a dictionary <br /> of over 200 .</p>
              </div>
              <div className="p-5 border-2 border-blue-300 rounded-lg">
                <div className=" text-center bg-[#ff3711] rounded-full mt-4 w-16 h-16 mx-auto shadow-xl">
                  <h2 className="mt-4 inline-block text-white text-xl font-bold">03</h2>
                </div>
                <h2 className="text-xl font-bold text-center my-6">STEP THREE</h2>
                <p className="text-center pb-2">It uses a dictionary <br /> of over 200 .</p>
              </div>
          </div>
              <div className="relative my-5">
                <img src={img} alt="" className="w-full h-[400px]" />
                <img src={playImg} className="absolute left-1/2 top-[45%]" alt="" />
                <img src={circle} className="absolute left-[46%] top-[38%]" alt="" />
              </div>
        </div>
        <div className="cols-span-1"></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
