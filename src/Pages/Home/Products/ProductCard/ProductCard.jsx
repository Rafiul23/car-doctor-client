import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductCard = ({ product }) => {
  const { img, product_name, price, rating } = product;

  return (
    <div className="p-4 border hover:border-2 hover:border-[#FF3811]">
      <figure>
        <img src={img} alt="Service" className="w-full h-[200px]" />
      </figure>
      <div className="card-body text-center">
        <div className="space-y-2 text-[#FF3811] font-semibold ">
          <Rating
            className="mx-auto"
            readOnly={true}
            value={rating}
            style={{ maxWidth: 250 }}
          ></Rating>
          <h2 className="font-bold text-center">{product_name}</h2>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
