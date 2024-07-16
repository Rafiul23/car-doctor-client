import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import bookingImg from "../../assets/images/checkout/checkout.png";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const email = user?.email;
  const url = `http://localhost:5000/bookings?email=${email}`;

  axios.get(url).then((data) => {
    setBookings(data.data);
  });

  return (
    <div>
      <div className="relative my-10">
        <img src={bookingImg} alt="service image" className="w-full" />
        <h2 className="font-bold absolute top-[42%] left-12 text-white text-5xl ">
          My Bookings
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  Delete Booking
                </label>
              </th>
              <th>Customer</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map(booking =>  <tr key={booking._id}>
                <th>
                  <button className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={booking.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Name: {booking.customerName}</div>
                      <div className="text-sm opacity-50">Phone: {booking.phone}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {booking.service}
                  
                </td>
                <td>$ {booking.price}</td>
                <td>{booking.date}</td>
                <th>
                  <button className="btn bg-[#ff3811] text-white btn-md">Pending</button>
                </th>
              </tr>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
