import React, { useState } from "react";
import "./style.css"

const Form = () => {

    const [name, setName]=useState([]);
    const [email,setEmail]=useState([]);
    const [number, setNumber]=useState([]);
    const [address, setAddress]=useState([]);
    const [display, setDisplay]=useState(false);
    // const displayList = () =>{
    //     setDisplay(true);
    // }
    const submitHandler = (e)=>{
        e.preventDefault();
        setName((prev)=>[...prev, e.target['name'].value]);
        setEmail((prev)=>[...prev, e.target['email'].value]);
        setNumber((prev)=>[...prev, e.target['number'].value]);
        setAddress((prev)=>[...prev, e.target['address'].value]);

    }
    return (
        <div className="main_div">
            <div className="form">
                <form  onSubmit={submitHandler}>
                <input className="inputBox" type="text" placeholder="Name" name='name'></input>
                <br />
                <input className="inputBox" type="email" placeholder="Email" name='email'></input>
                <br />
                <input className="inputBox" type="number" placeholder="Number" name='number'></input>
                <br />
                <input className="inputBox" type="text" placeholder="Address" name='address'></input>
                <button  className="submitBtn" type="submit">Submit</button>
                </form>
            </div>
            {/* <button className="viewList" onClick={displayList}>View Lists</button> */}
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
            </div>
        </div>
    )
}

export default Form;