import socialMediaImg from '../../../../assets/images/team/Group 38728.png';

const TeamCard = ({memberImg}) => {
    return (
        <div className="p-4 border hover:border-2 hover:border-[#FF3811]">
      <figure>
        <img
          src={memberImg}
          alt="Service"
          className="w-full h-[250px]"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="font-bold text-2xl ">Car Engine Plug</h2>
        <div className="card-actions font-semibold ">
        <p>Engine Expert</p>
         
        </div>
        <div className=' my-2'>
            <img src={socialMediaImg} className='mx-auto' alt="" />
        </div>
      </div>
    </div>
    );
};

export default TeamCard;