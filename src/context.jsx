import React, { useContext, useState } from "react";
const AppContext = React.createContext();



const AppProvider = ({children}) =>{

    const [name, setName]=useState([]);
    const [email,setEmail]=useState([]);
    const [number, setNumber]=useState([]);
    const [address, setAddress]=useState([]);
    const submitHandler = (e)=>{
        e.preventDefault();
        setName((prev)=>[...prev, e.target['name'].value]);
        setEmail((prev)=>[...prev, e.target['email'].value]);
        setNumber((prev)=>[...prev, e.target['number'].value]);
        setAddress((prev)=>[...prev, e.target['address'].value]);
        
    } 

    return (
        <AppContext.Provider value={{name, email, number, address , submitHandler}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};