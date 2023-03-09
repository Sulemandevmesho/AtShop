//import OrderItems from "../components/OrderItems";
import OrderCss from "../components/Order.module.css";
//import { useState } from "react";
import { Link } from "react-router-dom";
const Order = ({d}) => {
  //const [items,setitems]=useState(d.items);
  //console.log(d);
  return (
    <>
      <Link to={`orderdetail/${d._id}`}>
        <div className={OrderCss.order }>
          <div className={OrderCss.order_head}>
            <h2 className={["text-xl font-bold",OrderCss.order_name].join(" ")}>{d.customer_name}</h2>
            <p className={OrderCss.order_date}>{d.date}</p>
          </div>
          
          <div className={OrderCss.order_footer}>
            <span>
              total bill<p className={OrderCss.order_total_bill}>{d.total}Rs</p>
            </span>
            <span>
              status<p className={OrderCss.order_status}> {d.status}</p>
            </span>
          </div>
        </div>
        </Link>
    </>
  );
};

export default Order;
