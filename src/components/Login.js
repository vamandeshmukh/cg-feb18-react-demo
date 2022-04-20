import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import AppUser from '../models/AppUser';
import { loginService } from '../services/AppUserService';
import { getAppUser } from '../redux/AppUserSlice';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {

    const [appUser, setAppUser] = useState(new AppUser());
    const currentUser = useSelector(state => state.appUser.loggedInUser);
    const [credentials, setCredentials] = useState('');
    const history = useHistory();
    const dispach = useDispatch();


    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        loginService(appUser)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('loggedInUser', response.data);
                alert('Success');
                // window.location.assign('/home');
                history.push('/home');
            }).catch((error) => {
                sessionStorage.removeItem('loggedInUser');
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container" >
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Login</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="MANAGER">MANAGER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default Login;

