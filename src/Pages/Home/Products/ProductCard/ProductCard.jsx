import React from "react";

const ProductCard = ({ product }) => {
  const { img, product_name, price, rating } = product;

  return (
    <div className="p-4 border hover:border-2 hover:border-[#FF3811]">
      <figure>
        <img src={img} alt="Service" className="w-full h-[200px]" />
      </figure>
      <div className="card-body text-center">
        <h2 className="font-bold text-center">{product_name}</h2>
        <div className="card-actions text-[#FF3811] font-semibold ">
          <p>Price: ${price}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
