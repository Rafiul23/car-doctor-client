import arrow from '../../../assets/icons/Vector.png'

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="p-4 border hover:border-2 hover:border-[#FF3811]">
      <figure>
        <img
          src={img}
          alt="Service"
          className="w-full h-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions text-[#FF3811] font-semibold justify-between">
        <p>Price: ${price}</p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
