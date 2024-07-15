import { useLoaderData } from 'react-router-dom';
import checkOutImg from '../../assets/images/checkout/checkout.png'; 

const CheckOut = () => {

    const service = useLoaderData();

    const {title, price} = service;

  return (
    <div>
      <div className="relative my-10">
        <img src={checkOutImg} alt="service image" className="w-full" />
        <h2 className="font-bold absolute top-[42%] left-12 text-white text-5xl ">
          Check Out 
        </h2>
        <div className="text-center text-white bg-[#ff3811] absolute bottom-0 left-[45%] font-medium trapezoid px-[52px] py-4">
          Home/Check Out
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-[#ff3811] text-center">Book Service: {title}</h2>
      
    </div>
  );
};

export default CheckOut;
