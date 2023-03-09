import { Link } from "react-router-dom";
import Order from "../components/Order";
import { getAllOrders } from "../redux/actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import HomeScreenCss from "./HomeScreen.module.css";
const HomeScreen = () => {
  const dispatch = useDispatch();
  
  const Orders = useSelector((state) => state.getOrders);
  const { loading, orders, error } = Orders;
  const [data,setData]=useState([]);
  const [pages,setPages]=useState(parseInt(Math.ceil(orders.length/10)));
  const [current,setCurrent]=useState(0);
  
  useEffect(()=>{
    dispatch(getAllOrders());
  },[dispatch])
  
  useEffect(()=>{
    setData(orders.slice(current*10,((current+1)*10)))
     
  },[orders])
 
  return (
    <div className={ HomeScreenCss.homescreen}>
      <div className={HomeScreenCss.home_head}>
        <h2 className={HomeScreenCss.home_title}>Last Orders</h2>
      </div>
        <Link to='/neworder' className={["hover:scale-125",HomeScreenCss.add_order].join(" ")}><i className="fas fa-plus"></i></Link>
      <div className={HomeScreenCss.home_orders}>
        
        {data.map((o,i)=> {return(<Order key={i} d={o}/>)})}
      </div>
    </div>
  );
};

export default HomeScreen;
