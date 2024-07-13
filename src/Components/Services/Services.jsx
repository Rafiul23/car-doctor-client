import { useEffect, useState } from "react";
import ServiceCard from "../../Pages/Home/ServiceCard/ServiceCard";



const Services = () => {

    const [services, SetServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json() )
        .then(data => SetServices(data))
    },[])

    return (
        <div className="py-10">
            <div className="text-center space-y-2">
            <h4 className="text-[#FF3811] text-xl font-bold">Services</h4>
            <h3 className="text-4xl font-bold text-[#151515]">Our Service Area</h3>
            <p className="text-[#737373]">The majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-4">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className="text-center my-4">
                <button className="btn btn-outline text-[#FF3811]">View Services</button>
            </div>

            
        </div>
    );
};

export default Services;