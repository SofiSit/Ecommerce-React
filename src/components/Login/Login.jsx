import React, { useEffect } from 'react'
import './Login.css';
import { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext/UserDataContext';
import { ApiContext } from '../../context/ApiContext/ApiContext';
import { UserContext } from '../../context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../../context/LoggedInContext/LoggedInContext';



const Login = () => {
    
    //fetch
    const { userData } = useContext(UserDataContext);
    const { fetchUser } = useContext(ApiContext);

    useEffect(() => {
        fetchUser()
    }, []);

    //LOGIN
    const navigate = useNavigate();
    const value2 = useContext(UserContext);
    const [ user, setUser ] = value2.user;
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])


    const getDataForm = e => {
        e.preventDefault();

        const target = e.target;
        const email = target.email.value;
        const password = target.password.value;
        const authentic = userData.find(u => password === u.password) && userData.find(u => email === u.email)
        if (authentic) {
            setUser(authentic);
            setLoggedIn(true);
            navigate("/");

        } else {
            alert("No exist user");
        }
    }

    //REGISTER

    const getUserRegister = (e) => {
        e.preventDefault();

       

        const newUser = {
            id: new Date().getTime(),
            name: e.target.name.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
        setUser(newUser);
        setLoggedIn(true); // login the new user
        navigate("/");
    

    }


    return (
        <>
            <div className="wrapper">
                
                <form onSubmit={getDataForm} className="form-group-login1">
                    <p className="account-heading">Sign in </p>
                    <input type="text" placeholder="email" id="email" name="email" className="email" />
                    <input type="password" placeholder="password" id="password" name="password" className="passwd" />
                    <a href="#" className="btn btn-forget">Forget your password?</a>
                    <button href="#" type="submit" className="btn-login">Sign in</button>
                </form>

                <form onSubmit={getUserRegister} action="#" className="form-group-login">
                    <br />
                    <p>Register                 </p>
                    <input type="text" placeholder="name" name="name" className="name" />
                    <input type="text" placeholder="lastName" name="lastName" className="lastName" />
                    <input type="text" placeholder="email" name="email" className="email" />
                    <input type="password" placeholder="password" name="password" className="passwd" />
                    <button href="#" type="submit" className="btn-login">Register</button>
                </form>
            </div>


        </>
    )
}
export default Login