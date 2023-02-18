import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './signup.css'


const SignUp = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const SignUp = async (e) => {
        e.preventDefault();
        console.log(title, name, phone, email, password);

        let result = await fetch('http://localhost:3001/register', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, name, phone, email, password })
        });

        result = await result.json()

        if (result.status == false) {
            alert(result.message)

        } else {
            localStorage.setItem("userId", JSON.stringify(result.data.userId))
            localStorage.setItem("token", JSON.stringify(result.data.token))
            console.log(result);
            navigate('/login')
        }
    }



    return (

        <div className="signup">
            <h3>
                SignUp
            </h3>

            <div className="signup-input">
                <form>

                    <label>title: </label>
                    <input
                        type='text'
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /><br />
                    <label>name: </label>
                    <input
                        type='text'
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <label>email: </label>
                    <input
                        type='email'
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <label>phone: </label>
                    <input
                        type='tel'
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    /><br />
                    <label>password: </label>
                    <input
                        type='password'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br /><br />

                    {/* <label>address: </label>
                <input
                    type='text'
                    placeholder="address"
                /><br /><br /> */}

                    {/* <Link to="/login" > */}
                    <button className="btn" type="submit" onClick={SignUp}>SignUp</button><br />
                    {/* </Link> */}

                    <span>
                        Already have an account ? <Link to="/login">Login.</Link>
                    </span>

                </form>
            </div>




        </div>
    )

}

export default SignUp