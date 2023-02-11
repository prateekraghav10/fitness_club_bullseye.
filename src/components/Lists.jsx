import React from "react";
import "./style.css"
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Lists = () =>{
    const { name, email, number, address}=useGlobalContext();
    const navigate = useNavigate();
    const goToForrm = () =>{
        navigate("/");
    }
    
    return (
        <>
            <div className="lists">
                <h2 className="heading">Members Lists</h2>
                <div className="container">
                    
                    <div className="grid">
                        <div className="item">
                            <h2 className="title">Name</h2>
                        { name.map((item)=>{return (<div className="itemin">{item}</div>)})}
                        </div>
                        <div className="item">
                        <h2 className="title">Email</h2>
                        { email.map((item)=>{return (<div className="itemin">{item}</div>)})}
                        </div>
                        <div className="item">
                        <h2 className="title">Phone Number</h2>

                        { number.map((item)=>{return (<div className="itemin">{item}</div>)})}
                        </div>
                        <div className="item">
                        <h2 className="title">Address</h2>

                        { address.map((item)=>{return (<div className="itemin">{item}</div>)})}
                        </div>
                    </div>
                </div>
                <div className="btn">
                <button className="changeBtn" onClick={goToForrm}>Go Back</button>
                </div>
            </div>
        </>
    )
}

export default Lists;