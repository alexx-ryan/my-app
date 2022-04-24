import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from './UserContext';

function LoginComponent (){

    // Get the shared global value from App.js using the UserContext shared object.
    const {user, setUser} = useContext(UserContext);

    
    


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        try {
        Axios.post("http://localhost:3000/user/login", {
            email: email,
            password: password,
        }).then((response) => {

            if (response.data.message) {
              setUser(response.data.user.token);
              console.log(response.data.user);
              setLoginStatus(response.data.message)
              console.log("Setting user after call")
              
            } else {
              console.log("Setting user after call")
              
              setLoginStatus(response.data[0].email)
            }
        });
        } catch (error) {
        console.log(error)
        }
    };

    

    return (
        <div className="wrap">
            <div className="container">
              <form className="login-form">
                <div className="form-header">
                  <h3>Handshake Administrator Login</h3>
                  <p>{user}</p>
                </div>
                <div className="form-group">
                  <input type="text" required className="form-input" onChange={(e) => { setEmail(e.target.value) }} placeholder="email@example.com"></input>
                </div>
                <div className="form-group">
                  <input type="password" className="form-input" onChange={(e) => { setPassword(e.target.value) }} placeholder="password"></input>
                </div>
                <div className="form-group">
                  <button className="form-button" type='button' onClick={login} >Login</button>
                </div>
                <div className="form-group">
                  <button className="form-button" type='button' onClick={() =>{setUser("Hello from Login")}} >Login</button>
                </div>
                <div className="form-footer">
                  Handshake 2022.  <h1>{loginStatus}</h1>
                </div>
              </form>
            </div>
          </div>
    );
}

export default LoginComponent;