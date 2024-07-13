import { useLoaderData } from 'react-router-dom';
import serviceImg from '../../assets/images/checkout/checkout.png'
import './service.css';
const ServiceDetails = () => {

    const serviceData = useLoaderData();

    const {img, title, description, facility} = serviceData;

    console.log(serviceData);

    return (
        <div>
            <div className='relative'>
                <img src={serviceImg} alt="service image" className='w-full' />
                <h2 className='font-bold absolute top-[42%] left-12 text-white text-5xl '>Service Details</h2>
                <div className='text-center text-white bg-[#ff3811] absolute bottom-0 left-[45%] font-medium trapezoid px-[52px] py-4'>Home/Service Details</div>
            </div>
            <div className='my-20 grid grid-cols-4 gap-6'>
                <div className='col-span-3 border-2'>
                    <img src={img} alt="" className='w-full' />
                    <h2 className='text-4xl my-5 font-bold'>{title}</h2>
                    <p className='mb-4'>{description}</p>
                    <div className='grid grid-cols-2 gap-4'>
                        {
                            facility.map(advantage => <div className='bg-base-200 p-4 rounded-lg '>
                                <h3 className='font-bold text-2xl my-2'>{advantage.name}</h3>
                                <p>{advantage.details}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className='cols-span-1 border-2'>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;