import team from '../../../assets/icons/team.png';
import delivery from '../../../assets/icons/delivery.png';
import support from '../../../assets/icons/support.png';
import equipment from '../../../assets/icons/equipment.png';
import guaranty from '../../../assets/icons/guarantee.png';
import delivery_2 from '../../../assets/icons/delivery2.png';
import QualityCard from './QualityCard/QualityCard';


const ChooseUs = () => {
    return (
        <div className="py-10">
           <div className="text-center space-y-2">
            <h4 className="text-[#FF3811] text-xl font-bold">Core Features</h4>
            <h3 className="text-4xl font-bold text-[#151515]">Why Choose Us</h3>
            <p className="text-[#737373]">The majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>  

            <div className='flex justify-between py-5 items-center flex-wrap gap-2' >
                <QualityCard
                img={team}
                isColored={false}
                quality='Expert Team'
                ></QualityCard>
                <QualityCard  isColored={true}
                img={delivery}
                quality='Timely Delivery'
                ></QualityCard>
                <QualityCard  isColored={false}
                img={support}
                quality='24/7 Support'
                ></QualityCard>
                <QualityCard  isColored={false}
                img={equipment}
                quality='Best Equipment'
                ></QualityCard>
                <QualityCard  isColored={false}
                img={guaranty}
                quality='100% Guarrantee'
                ></QualityCard>
                <QualityCard  isColored={false}
                img={delivery_2}
                quality='Timely Delivery'
                ></QualityCard>

            </div>
        </div>
    );
};

export default ChooseUs;