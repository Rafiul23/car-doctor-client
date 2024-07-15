import checkOutImg from '../../assets/images/checkout/checkout.png'; 

const CheckOut = () => {
  return (
    <div>
      <div className="relative">
        <img src={checkOutImg} alt="service image" className="w-full" />
        <h2 className="font-bold absolute top-[42%] left-12 text-white text-5xl ">
          Check Out 
        </h2>
        <div className="text-center text-white bg-[#ff3811] absolute bottom-0 left-[45%] font-medium trapezoid px-[52px] py-4">
          Home/Check Out
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
