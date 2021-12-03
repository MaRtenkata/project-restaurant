import { useState, useRef } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "../Register/Register.css";





function Register(params) {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
 

    async function handleSubmit(e) {
        e.preventDefault()


        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match!!")
        }
        try {
            setError('')
            signUp(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
           
            navigate('/');
            setLoading(true)
        } catch {
            setError('Failed to create and account')
        }
        setLoading(false)


    }



    return (

        <form className="form-signin" onSubmit={handleSubmit}>
            {error && <div class="alert alert-danger" role="alert">{error}</div>}
           

            <div className="mu-title">
                <span className="mu-subtitle">Register</span>
                <h2>Please sign in</h2>
            </div>

            <div className="form-floating">
                <label htmlFor="floatingInput">Name</label>
                <input type="text" className="form-control" id="floatingInput" placeholder="Full Name" ref={nameRef} required />
            </div>
            <div className="form-floating">
                <label htmlFor="floatingInput">Email address</label>
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={emailRef} required />
            </div>
            <div className="form-floating">
                <label htmlFor="floatingPassword">Password</label>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={passwordRef} required />
            </div>
            <div className="form-floating">
                <label htmlFor="floatingPassword">Confirm Password</label>
                <input type="password" className="form-control" id="floatingRePassword" placeholder="Confirm Password" ref={passwordConfirmRef} />
            </div>
            <div className="form-login">
                <p>Alredy have and accout: <Link className="login-btn" to="/login">Login</Link></p>
            </div>

            <div className="checkbox mb-3">
                <label >
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={loading}>Register</button>

        </form>
    )
}

export default Register;