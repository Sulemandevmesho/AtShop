import {useDispatch} from "react-redux";
import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import LoginCss from "./Login.module.css";
import { login } from "../redux/actions/loginAction";
const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [detail,setDetail]=useState({
    userName:'',
    password:''
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setDetail({...detail,[name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(detail));
    navigate('/');
    
  }
  return (
    <section
      className={[
        "m-0 p-0 flex justify-center items-center min-h-[100vh]",
        LoginCss.textFont,
      ].join(" ")}
    >
      <div className="relative flex justify-center items-center  h-[450px] w-[450px] bg-transparent border-2 border-solid backdrop-blur-[2px] rounded-lg border-[rgba(225,225,255,.5)] form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center text-white mb-8">Login</h2>
            <div className="relative m-[30px 0] w-[310px] border-b-4 border-white border-solid inputbox">
             
              <i className="fa fa-envelope absolute text-white text-xl top-5 right-2"></i>
              <input
              required={true}
                type="text"
                name="userName"
                onChange={handleChange}
                className={["w-full h-[50px] text-white bg-transparent border-none outline-none text-lg pt-0 pr-[35px] pb-0 pl-[5px]" ,LoginCss.inputFild].join(" ")}
                id=""
              />
               <label
                htmlFor="userName"
                className={["absolute top-2/4 left-1 text-white pointer-events-none",LoginCss.inputlabel].join(" ")}
              >
                User Name
              </label>
            </div>

            <div className="relative my-[30px] w-[310px] border-b-4 border-white border-solid inputbox">
            
              <i className="fa fa-lock absolute text-white text-xl top-5 right-2"></i>
              <input type="password" name="password" required={true}
              onChange={handleChange}
              className={["w-full h-[50px] border-none text-white outline-none text-lg pt-0 pr-[35px] pb-0 pl-[5px] bg-transparent" ,LoginCss.inputFild,LoginCss.label].join(" ")}
              id="" />
                <label htmlFor="password"
              className={["absolute top-2/4 left-1 text-white pointer-events-none",LoginCss.inputlabel].join(" ")}
              >Password</label>
            </div>
            <div className="forget m-[-15px 0 15px] text-sm text-white flex justify-center">
              <label>
                <input type="checkbox" className="mr-1"/>
                Remember Me
              </label>
              <Link to="#" className="text-white ml-1  hover:underline">Forget password</Link>
            </div>
            <button className="mt-3 w-full h-10 bg-white rounded-full font-semibold border-none text-lg">Log in</button>
            <div className="register text-sm text-white text-center mt-[25px] mr-0 mb-[10px] ]">
              <p >
                Don't have a account <Link className="text-white font-semibold hover:underline" to="#">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
