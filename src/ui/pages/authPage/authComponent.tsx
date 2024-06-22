import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../../globalVarialbles.tsx";

export const AuthComponent: React.FC<{}> = ({}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errMessage, setErrorMessage] = useState("")

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  
  const {cosmerePath} = useGlobalState()
  const navigate = useNavigate();
  const handleVisitAsGuest = () => {
    navigate("/main")
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      try{
        
        const response = await axios.post(cosmerePath + '/mongoUsers/login', 
        { _email: email, 
          _password: password });

        
        console.log(response.data.token)
        if(response.data.token){
          console.log(response.data)
          sessionStorage.setItem('token', response.data.token);
          navigate("/main");
        }
        else{
          setErrorMessage("")
          setErrorMessage(response.data.error)
        }
      }
      catch(error: any) {
        console.error('Error making POST request:', error);
        if (error) {
          console.log('Response data:', error.response.data);
          setErrorMessage(error.response.data.error)
        }
      }
     
     
    } else {
      try{
        const response = await axios.post(cosmerePath + '/mongoUsers/register', {  _username: username, _email: email, _password: password, });
          if(response.data.result.acknowledged){
            const response = await axios.post(cosmerePath + '/mongoUsers/login', { _email: email, _password: password });
            if(response.data.token){
              console.log(response.data)
              sessionStorage.setItem('token', response.data.token);
              navigate("/main");
            }
            navigate("/main");
        }
      }
      catch(error: any) {
        console.error('Error making POST request:', error);
        if (error.response) {
          console.log('Response data:', error.response.data);
          setErrorMessage(error.response.data.error)
        }
      }
    }
    
  };
  return (
    <>
      <div className="auth-container">
        <h2 className='auth-title'>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required={!isLogin}
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        
        {errMessage && <p className="error-message">{errMessage}</p>}
        <button onClick={toggleAuthMode} className="toggle-button">
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </button>
        <button className="toggle-button" onClick={handleVisitAsGuest}>
          Visit as guest 
        </button>
      </div>
    </>
  );
}