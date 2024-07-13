import { useLoaderData } from 'react-router-dom';
import serviceImg from '../../assets/images/checkout/checkout.png'
import './service.css';
const ServiceDetails = () => {

    const serviceData = useLoaderData();

    console.log(serviceData);

    return (
        <div>
            <div className='relative'>
                <img src={serviceImg} alt="service image" className='w-full' />
                <h2 className='font-bold absolute top-[42%] left-12 text-white text-5xl '>Service Details</h2>
                <div className='text-center text-white bg-[#ff3811] absolute bottom-0 left-[45%] font-medium trapezoid px-[52px] py-4'>Home/Service Details</div>
            </div>
        </div>
    );
};

export default ServiceDetails;