import timeImg from '../../../assets/images/services/001-timetable.png'
import message from '../../../assets/images/services/Group.png';
import location from '../../../assets/images/services/Group 35.png';

const ContactInfo = () => {

    return (
        <div className="bg-[#151515] text-white flex justify-around items-center md:flex-row flex-col w-full h-[300px] my-10">
                <div className="flex gap-2">
                    <img src={timeImg} alt="" />
                    <div>
                        <p>We are open monday-friday</p>
                        <h3 className="font-bold">7:00 am - 9:00 pm</h3>
                    </div>
                </div>

                <div className="flex gap-2">
                    <img src={message} alt="" />
                    <div>
                        <p>Have a question?</p>
                        <h3 className="font-bold">+2546 251 2658</h3>
                    </div>
                </div>

                <div className="flex gap-2">
                    <img src={location} alt="" />
                    <div className="">
                        <p>Need a repair? our address</p>
                        <h3 className="font-bold">Liza Street, New York</h3>
                    </div>
                </div>
                
            </div>
    );
};

export default ContactInfo;