import About from "./About/About";
import Banner from "./Banner/Banner";
import ContactInfo from "./ContactInfo/ContactInfo";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Team from "./Team/Team";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
           <Services></Services>
           <ContactInfo></ContactInfo>
           <Products></Products>
           <Team></Team>
        </div>
    );
};

export default Home;