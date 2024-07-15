import { useLoaderData } from "react-router-dom";
import checkOutImg from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();

  const { title, price } = service;
  const {user} = useContext(AuthContext);

  const handleBookService = e =>{
    e.preventDefault();
    const form = e.target;
    const name= form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const dueAmount = form.dueAmount.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
        customerName: name,
        email,
        date,
        dueAmount,
        phone,
        message
    }

    
  }

  return (
    <div>
      <div className="relative my-10">
        <img src={checkOutImg} alt="service image" className="w-full" />
        <h2 className="font-bold absolute top-[42%] left-12 text-white text-5xl ">
          Check Out
        </h2>
        <div className="text-center text-white bg-[#ff3811] absolute bottom-0 left-[45%] font-medium trapezoid px-[52px] py-4">
          Home/Check Out
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-5 text-[#ff3811] text-center">
        Book Service: {title}
      </h2>

     <div className="bg-base-200 p-5 my-10 rounded-lg">
     <form onSubmit={handleBookService} className="card-body">
        <div className="flex md:flex-row flex-col">
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text font-semibold">Name:</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ml-4 md:w-1/2 w-full">
          <label className="label">
            <span className="label-text font-semibold">Date:</span>
          </label>
          <input
            type="date"
            placeholder="Enter Date"
            name="date"
            className="input input-bordered"
            required
          />
        </div>
        
        </div>

        <div className="flex md:flex-row flex-col">
        
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            defaultValue={user?.email}
            placeholder="Enter Your Email Address"
            name="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control ml-4 md:w-1/2 w-full">
          <label className="label">
            <span className="label-text font-semibold">Due Amount:</span>
          </label>
          <input
            type="number"
            defaultValue={price}
            placeholder="Enter Your Phone Number"
            name="dueAmount"
            className="input input-bordered"
            required
          />
        </div>
        </div>

        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text font-semibold">Phone:</span>
          </label>
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            className="input input-bordered"
            required
          />
        </div>

       <div className="form-control mt-6">
       <label className="label">
            <span className="label-text font-semibold mb-2">Your Message</span>
          </label>
       <textarea name="message" className="input-bordered p-4" id="message" placeholder="Type Your Message Here..."  cols="30" rows="10"></textarea>
       </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ff3811] text-white">Order Confirm</button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default CheckOut;
