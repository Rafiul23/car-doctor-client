import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="py-10">
            <div className="text-center space-y-2">
            <h4 className="text-[#FF3811] text-xl font-bold">Products</h4>
            <h3 className="text-4xl font-bold text-[#151515]">Browse Our Products</h3>
            <p className="text-[#737373]">The majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-4">
                {
                    products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                }
            </div>

            <div className="text-center my-4">
                <button className="btn btn-outline text-[#FF3811]">View Products</button>
            </div>

            
        </div>
    );
};

export default Products;