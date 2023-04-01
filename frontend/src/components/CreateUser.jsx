
import { useState } from "react"
import axios from 'axios';
import {useDispatch , useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {SelectUser} from "../redux/actions/orderAction";
import CUCSS from "./CreateUser.module.css"
const CreateUser = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const Customer=useSelector(state=>state.customer);
  const [user,setUser]=useState({
    name:'',
    password:'',
    number:'',
    role:'',
    address:'',
    duse:0
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('/api/user',user).then(({data})=>dispatch(SelectUser(data.user,data.customerName))).then(navigate('/'));
  }
  return (
    <div  className=" m-0 p-0 min-h-screen flex items-center justify-center ">
    <form onSubmit={handleSubmit} className={['bg-white px-[20px] py-[40px] w-full max-w-lg  rounded box-border  ',CUCSS.form].join(' ')}>
      <div className="relative mb-4">
        <input onChange={handleChange} type="text" name="name" required className={["p-3 w-full max-w-lg box-border outline-none  ",CUCSS.input].join(' ')} />
        <label htmlFor="name" className={["absolute top-[13px] font-semibold p-0 m-0 text-center left-2 text-md text-[#dfea07] pointer-events-none",CUCSS.placeholder].join(' ')}>Name</label>
        </div>
        <div className="relative mb-4">
        <input onChange={handleChange} type="text" name="password" required className={["p-3 w-full max-w-lg box-border outline-none border border-solid border-[#dfea07]",CUCSS.input].join(' ')} />
        <label htmlFor="password" className={["absolute top-[13px] font-semibold p-0 m-0 text-center left-2 text-md text-[#dfea07] pointer-events-none",CUCSS.placeholder].join(' ')}>Password</label>
        </div>
        <div className="relative mb-4">
        <input type="text" name="number" onChange={handleChange} required className={["p-3 w-full max-w-lg box-border outline-none border border-solid border-[#dfea07]",CUCSS.input].join(' ')} />
        <label htmlFor="number" className={["absolute top-[13px] font-semibold p-0 m-0 text-center left-2 text-md text-[#dfea07] pointer-events-none",CUCSS.placeholder].join(' ')}>Number</label>
        </div>
        <div className="relative mb-4">
        <input type="text" name="role" onChange={handleChange} required className={["p-3 w-full max-w-lg box-border outline-none border border-solid border-[#dfea07]",CUCSS.input].join(' ')} />
        <label htmlFor="role" className={["absolute top-[13px] font-semibold p-0 m-0 text-center left-2 text-md text-[#dfea07] pointer-events-none",CUCSS.placeholder].join(' ')}>Role</label>
        </div>
        
        <div className="relative mb-4">
        <textarea type="text" rows={3} name="address" required onChange={handleChange} className={["p-3 w-full max-w-lg box-border outline-none border border-solid border-[#dfea07]",CUCSS.input].join(' ')} />
        <label htmlFor="address" className={["absolute top-[13px] font-semibold p-0 m-0 text-center left-2 text-md text-[#dfea07] pointer-events-none",CUCSS.placeholder].join(' ')}>Address</label>
        </div>
        <div className="flex justify-center item-center">
          <button type="submit" className="border border-yellow-600 mt-2 bg-yellow-400 w-24 p-2 text-white rounded-md">Add</button>
        </div>
    </form>
    </div>
  )
}

export default CreateUser