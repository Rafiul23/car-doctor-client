import About from "./About/About";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import ContactInfo from "./ContactInfo/ContactInfo";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
           <Services></Services>
           <ContactInfo></ContactInfo>
           <Products></Products>
           <Team></Team>
           <ChooseUs></ChooseUs>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;