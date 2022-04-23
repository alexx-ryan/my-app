import logo from './logo.svg';
import {useState} from 'react'
import Axios from 'axios';
import './App.css';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [loginStatus, setLoginStatus]= useState("");

  const login = () => {
    try {
        Axios.post("http://localhost:3000/user/login", { 
        email: email,
        password: password,
      }).then((response) => {

        if(response.data.message){
          setLoginStatus(response.data.message)
        }else{
          setLoginStatus(response.data[0].email)
        }
    });
    } catch (error) {
      console.log(error)
    } 
  };



  

  return (
    <div className="App">
      <div className="wrap">
        <div className="container">
          <form className="login-form">
            <div className="form-header">
              <h3>Handshake Administrator Login</h3>
            </div>
            <div className="form-group">
              <input type="text" className="form-input" onChange={(e) => {setEmail(e.target.value)}} placeholder="email@example.com"></input>
            </div>
            <div className="form-group">
              <input type="password" className="form-input" onChange={(e) => {setPassword(e.target.value)}} placeholder="password"></input>
            </div>
            <div className="form-group">
              <button className="form-button" type='button' onClick={login} >Login</button>
            </div>
            <div className="form-footer">
              Handshake 2022.
            </div>
          </form>
        </div>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
