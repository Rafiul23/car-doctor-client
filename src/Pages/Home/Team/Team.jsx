import TeamCard from "./TeamCard/TeamCard";
import member_1 from '../../../assets/images/team/1.jpg'
import member_2 from '../../../assets/images/team/2.jpg'
import member_3 from '../../../assets/images/team/3.jpg'


const Team = () => {
    return (
        <div className="my-10">
          <div className="text-center space-y-2">
            <h4 className="text-[#FF3811] text-xl font-bold">Team</h4>
            <h3 className="text-4xl font-bold text-[#151515]">Meet our team</h3>
            <p className="text-[#737373]">The majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>  

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-4">
                <TeamCard memberImg={member_1}></TeamCard>
                <TeamCard memberImg={member_2}></TeamCard>
                <TeamCard memberImg={member_3}></TeamCard>
            </div>
        </div>
    );
};

export default Team;