import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { resetOrder, selectOrders } from "../features/order/orderSlice";
import React, { useState } from 'react';
import OrderSummary from "../features/orderSummery/OrderSummery";
import axios from 'axios'


function OrderSuccessPage() {
   const params = useParams() 
   const dispatch = useDispatch();
   const user = useSelector(selectLoggedInUser);
  //  console.log(user.id);


  //  console.log(order);

   const [showOrder, setShowOrder] = useState(false)
   const [userDetail,setUserDetail]=useState([])


   useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/users/${user.id}`);
        setUserDetail(response.data);
       
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [user.id]);
   
   useEffect(()=>{
    // reset cart
    dispatch(resetCartAsync(user.id))
    // reset currentOrder
    dispatch(resetOrder())
   },[dispatch,user])
   
  return (
    <>
    {!params.id &&  <Navigate to='/' replace={true}></Navigate>}

    <>
    <div className='flex justify-center mt-3'>
    <div className='w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 p-5 mx-auto'>
       <p className='font-bold text-4xl'>Thank you for your purchase!</p>
       <p className='mt-5'>Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped</p>
       <img
          className="h-28 w-auto rounded-full mx-auto mt-5" 
          // src={logo}
          alt="Your Company"
        />
       <p className='font-bold text-left mt-5'>Billing address</p>
       
       <div>
       <table className="text-left mt-4">
          <tr className="py-4">
            <td className="w-32 font-bold">Name</td>
            <td className="text-left">Satyanarayana</td>
          </tr>
          <tr className="py-4">
            <td className="font-bold">Address</td>
            <td className="text-left">6-50, Pothunuru, Denduluru Mandal, Eluru district, AP</td>
          </tr>
          <tr className="py-4">
            <td className="font-bold">Phone</td>
            <td className="text-left">8500120107</td>
          </tr>
          <tr className="py-4">
            <td className="font-bold">Email</td>
            <td className="text-left">hpsfriends0@gmail.com</td>
          </tr>
      </table>
       </div>

    </div>
    </div>
    <Link to='/'>
    <button className=' bg-gray-800  hover:bg-gray-700 text-white p-2 rounded-lg w-36 mb-3'>Go back home</button>
    </Link>
    <p>To get order summary, click the button below</p>
    <button onClick={()=> setShowOrder(true)} className='bg-green-600  hover:bg-green-500 text-white p-2 rounded-lg w-56 mt-3'>Order Summary</button>
    { showOrder && <OrderSummary onClose={()=> setShowOrder(false)}/>}
    </>

    </>
  );
}

export default OrderSuccessPage;
