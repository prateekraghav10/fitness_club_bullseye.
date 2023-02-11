import React from "react";
import "./style.css"
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const {submitHandler}=useGlobalContext();
    const navigate = useNavigate();
    const viewList = () =>{
        navigate("/lists");
    }
    return (
        
        <>
            <div className="main_div">
                <div className="form">
                    <form  onSubmit={submitHandler}>
                    <h2 className="heading">Enter Member Details</h2>
                    <input className="inputBox" type="text" placeholder="Name" name='name' required></input>
                    <br />
                    <input className="inputBox" type="email" placeholder="Email" name='email' required ></input>
                    <br />
                    <input className="inputBox" type="number" placeholder="Number" name='number' required></input>
                    <br />
                    <input className="inputBox" type="text" placeholder="Address" name='address' required></input>
                    <button  className="submitBtn" type="submit">Submit</button>
                    </form>
                </div>
            <div className="btn">
            <button className="changeBtn" onClick={viewList}>View Members Lists</button>
            </div>
            </div>
        
        </>
    )   
}
export default Form;