import React, { useState } from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png"
import { useDispatch } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpass: ""
    }
    const disptach = useDispatch()
    const [isSignUp, setIsSignUp] = useState(true)
    const [data, setData] = useState(initialState)
    const [confirmPass, setConfirmPass] = useState(true);

    // arrow function for form onChange
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }



    // Reset Form
    const resetForm = () => {
        setData(initialState);
        setConfirmPass(true);
    };

    // Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
           if(data.password === data.confirmpass ){
               disptach(signUp(data)) 
               setData(initialState) 
           }
            else{
                setConfirmPass(false)
            }
        }
        else{
            disptach(logIn(data))
            setData(initialState)
        }
    };
    return (
        <div className="Auth">
            {/* Left side */}
            <div className="a-left">
                <img src={Logo} alt="" />

                <div className="webname">
                    <h1>Social Bird</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/* Right Side */}
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
                    {isSignUp && (
                        <>
                            <div>
                                <input type="text" placeholder='First Name' className='infoInput' name="firstname" onChange={handleChange} value={data.firstname} />
                                <input type="text" placeholder='Last Name' className='infoInput' name="lastname" onChange={handleChange} value={data.lastname} />
                            </div>
                        </>
                    )}
                    <div>
                        <input type="email" placeholder='Email' className='infoInput' name="email" onChange={handleChange} value={data.email} />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' className='infoInput' name="password" onChange={handleChange} value={data.password} />
                        {isSignUp && (
                            <input type="password" placeholder='Confirm Password' className='infoInput' name="confirmpass" onChange={handleChange} value={data.confirmpass} />
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
                        <span style={{ fontSize: "12px", cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }} >
                            {isSignUp ? "Don't have an account? Signup!" : "Already have an account. Login!"}</span>
                    </div>
                    <button className="button infoButton" type='submit' >{isSignUp ? "SignUp" : "login"}</button>
                </form>
            </div>
        </div>
    )
}

export default Auth