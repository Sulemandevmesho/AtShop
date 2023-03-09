import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import OCSS from "./OrderDetail.module.css";
import { getOrder } from "../redux/actions/orderAction";
import OrderItems from "../components/OrderItems";
const OrderDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const Order = useSelector((state) => state.order);
  const { loading, order, error } = Order;

  useEffect(() => {
    if (order && id !== order._id) {
      dispatch(getOrder(id));
    }
  }, [dispatch,id]);

  const { items } = order;

  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className={["  ",OCSS.loading].join(' ')}>
          </div>
           
          <h2 className={['relative flex  justify-center top-2/4'].join(' ')}>Loading</h2>
        </div>
       
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h2 className="text-2xl mt-4 ml-4 font-bold ">Order Detail</h2>
          <div
            className={[
              OCSS.order,
              " border-2 m-auto border-solid border-gray-300 w-2/3 ",
            ].join(" ")}
          >
            <div className={[OCSS.head, "mt-10 p-5  w-full "].join(" ")}>
              <h3>{order.customer_name}</h3>
              <p>{order.date}</p>
            </div>
            <ul className="w-full">
              <li
                className="grid gap-2 m-auto w-full p-4 border-b-2 border-solid border-gray-400"
                style={{ gridTemplateColumns: "1fr 1fr 2fr 1fr" }}
              >
                <b>Quantity</b>

                <b>Product Name</b>
                <b>Description</b>
                <b>Price</b>
              </li>
              {items &&
                items.map((item, i) => <OrderItems data={item} key={i} />)}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetail;
