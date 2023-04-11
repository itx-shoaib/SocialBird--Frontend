import React, { useState } from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png"

const Auth = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: ""
    }
    const [isSignUp, setIsSignUp] = useState(false)
    const [data, setData] = useState(initialState)
    const [confirmPass, setConfirmPass] = useState(true);

    // arrow function for form onChange
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className="Auth">
            {/* Left side */}
            <div className="a-left">
                <img src={Logo} alt="" />

                <div className="webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/* Right Side */}
            <div className="a-right">
                <form className="infoForm authForm">
                    <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
                    {isSignUp && (
                        <>
                            <div>
                                <input type="text" placeholder='First Name' className='infoInput' name="firstname" onChange={handleChange} />
                                <input type="text" placeholder='Last Name' className='infoInput' name="lastname" onChange={handleChange} />
                            </div>
                        </>
                    )}
                    <div>
                        <input type="text" placeholder='Username' className='infoInput' name="username" onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' className='infoInput' name="password" onChange={handleChange} />
                        {isSignUp && (
                            <input type="password" placeholder='Confirm Password' className='infoInput' name="confirmpass" onChange={handleChange} />
                        )}
                    </div>
                    <span
                        style={{
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px",
                            display: confirmPass ? "none" : "block",
                        }}
                    >
                        *Confirm password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: "12px", cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev) }} >
                            {isSignUp ? "Don't have an account? Signup!" : "Already have an account. Login!"}</span>
                    </div>
                    <button className="button infoButton" type='submit' >{isSignUp ? "SignUp" : "login"}</button>
                </form>
            </div>
        </div>
    )
}

export default Auth