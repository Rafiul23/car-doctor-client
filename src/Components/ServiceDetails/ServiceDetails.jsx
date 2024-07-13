import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const serviceData = useLoaderData();

    console.log(serviceData);

    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;