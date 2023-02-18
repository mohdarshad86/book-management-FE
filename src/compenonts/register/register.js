import React, { useState } from "react";
import './register.css'
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        title: "",
        name: "",
        email: "",
        phone: "",
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

    const Register = async (e) => {
        e.preventDefault();
        const { title, name, email, phone, password, reEnterPassword } = user

        if (title && name && email && phone && (password === reEnterPassword)) {

            let result = await fetch('http://localhost:3001/register', {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, name, phone, email, password })
            });
            result = await result.json()

            if (result.status === false) {
                alert(result.message)
            }
            else {
                localStorage.setItem("userId", JSON.stringify(result.data.userId))
                localStorage.setItem("token", JSON.stringify(result.data.token))
                console.log(result);
                navigate('/login')
            }

        }
        else alert('Invalid Input')
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="title" value={user.title} placeholder="Enter Your Title [Mr, Mrs, Miss]" onChange={handleChange}></input>
            <input type="text" name="name" value={user.name} placeholder="Enter Your Full Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
            <input type="text" name="phone" value={user.phone} placeholder="Enter Your Mobile Number" onChange={handleChange}></input>
            <input type="text" name="address" value={user.address} placeholder="Enter Your Address" onChange={handleChange}></input>
            <input type="text" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Your Password" onChange={handleChange}></input>
            <div className="button" onClick={Register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/login')}>Login</div>
        </div>
    )
}

export default Register