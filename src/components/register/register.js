import React, { useState } from "react";
import './register.css'

const Register = () => {

    const [user, setUser] = useState({
        title: "",
        name: "",
        email: "",
        number: "",
        address: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="title" value={user.title} placeholder="Enter Your Title [Mr, Mrs, Miss]" onChange={handleChange}></input>
            <input type="text" name="name" value={user.name} placeholder="Enter Your Full Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
            <input type="text" name="number" value={user.number} placeholder="Enter Your Mobile Number" onChange={handleChange}></input>
            <input type="text" name="address" value={user.address} placeholder="Enter Your Address" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Your Password" onChange={handleChange}></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register