import TestimonialCard from "./TestimonialCard/TestimonialCard";


const Testimonial = () => {
    return (
        <div className="py-10">
            <div className="text-center space-y-2">
            <h4 className="text-[#FF3811] text-xl font-bold">Testimonial</h4>
            <h3 className="text-4xl font-bold text-[#151515]">What Customer Says</h3>
            <p className="text-[#737373]">The majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-10">
               <TestimonialCard></TestimonialCard> 
               <TestimonialCard></TestimonialCard> 
            </div>
        </div>
    );
};

export default Testimonial;