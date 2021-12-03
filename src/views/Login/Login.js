import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../Login/Login.css";

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();




    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/');
            setLoading(true)
          
        } catch {
            setError('Failed to Log in')
        }
        setLoading(false)


    }

    return (
     
        <form className="form-signin" onSubmit={handleSubmit}>
            <div className="mu-title">
                <span className="mu-subtitle">Login</span>
                <h2>Please Login</h2>
                {error && <div class="alert alert-danger" role="alert">{error}</div>}
                {currentUser && currentUser.email}
           
            </div>


            <div className="form-floating">
                <label htmlFor="floatingInput">Email address</label>
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={emailRef} required/>

            </div>
            <div className="form-floating">
                <label htmlFor="floatingPassword">Password</label>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={passwordRef} required/>

            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={loading}>Sign in</button>

        </form>
    )
}

export default Login;
