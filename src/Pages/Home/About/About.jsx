import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';


const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img
            src={person}
            className="w-3/4 h-[350px]
             rounded-lg"
          />
        <img
          src={parts}
          className="w-1/2 absolute h-[250px] top-1/2 left-1/3 border-8 border-white
           rounded-lg"
        />
         </div>
        <div className='w-1/2'>
          <h3 className="text-[#FF3811] font-bold">About Us</h3>
          <h1 className="py-6 text-5xl font-bold text-[#151515]">
          We are qualified <br /> & of experience in this field
          </h1>
          <p className="pb-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="pb-6 text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn bg-[#ff3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
