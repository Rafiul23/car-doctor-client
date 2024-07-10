import { Rating } from "@smastrom/react-rating";
import customer from '../../../../assets/images/customer/Ellipse 2.png';
import quote from '../../../../assets/images/customer/quote 1.png';

const TestimonialCard = () => {
    return (
        <div className=" space-y-4 border p-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                <img src={customer} alt="" />
                <div>
                <h3 className="text-4xl font-bold text-[#151515]">Awlad Hossain</h3>
                <p className="text-[#737373]">Businessman </p>
                </div>
                </div>
                <img src={quote} alt="" />
            </div>
            <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div>
                <Rating readOnly={true} className='max-w-40' value={4}></Rating>
            </div>
        </div>
    );
};

export default TestimonialCard;