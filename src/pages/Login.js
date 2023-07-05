import {React,useState,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Stack } from '@mui/material';
import { AuthContext } from "../AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {handleLoginSuccess}=useContext(AuthContext);
  const [loginMessage, setloginMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        userData
      );
      const data = response.data;

      //Assuming login was successful and received a token in the response
      const token = data.token;
      //Store the token in local storage or state for future authenticated requests
      localStorage.setItem("token", token);


      setloginMessage("Login Successfully");
      // Redirect to the home page or any other desired page
      handleLoginSuccess();
      let timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        navigate("/");
      }, 5000);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setloginMessage(error.response.data.error);
      } else {
        setloginMessage("Something went wrong");
      }
      console.log(error); // Handle the error
    }
  };


  return (
    <Stack padding={'50px'} className='body' alignItems={'center'} justifyContent={'center'} 
    sx={{background:"linear-gradient(0deg, #010B1B 10.9%,#102661 97.1%)"}}>
    {/* <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      </div> */}
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Email</label>
        <input type="email" placeholder="Email" id="username" value={email}
                onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>

        <Button className='button' onClick={handleLogin}>Log In</Button>
        
      </form>
      {loginMessage && (
              <p
                className={`message login-msg ${
                  loginMessage
                    ? loginMessage === "Login Successfully"
                      ? "success"
                      : "error"
                    : ""
                }`}
              >
                {loginMessage}
              </p>
            )}
            {loginMessage === "Login Successfully" && countdown > 0 && (
              <p className="countdown-timer login-timer">
                Redirecting in <span className="timer">{countdown}</span>{" "}
                seconds to HOME...
              </p>
            )}

      <style>{`
        
        .body {
          background-color: #080710;
        }
        .login-msg{
          margin-top: 10px;
          width: auto;
        
        }
        .login-timer{
          color: #000000;
          letter-spacing: normal;
        }
        .message{
          /*SignUp message*/
          padding: 8px;
          text-align: center;
          font-size: 17px;
          line-height: 30px;
          font-weight: 700;
          margin: 0 auto;
          width: 300px;
          max-width: calc(100vw - 48px);
          transform-origin: center bottom;
          transition: all 150ms ease-in-out 0s;
          border-radius: 12px;
          transform: translate3d(0px, 0px, 0px) scale(1);
          opacity: 1;
          }
          .success{
            color: rgb(0, 104, 74);
            border: 1px solid rgb(192, 250, 230);
            box-shadow: rgba(6, 22, 30, 0.2) 0px 18px 18px -15px;
            background-color: rgb(227, 252, 247);
          }
          
          .error{
            color: rgb(104, 0, 0);
            border: 1px solid rgb(250, 192, 192);
            box-shadow: rgba(30, 18, 6, 0.2) 0px 18px 18px -15px;
            background-color: rgb(252, 227, 227);
          }
          
          
          /*Countdown Timer*/
          .countdown-timer{
            margin: 0 auto;
            text-align: center;
            color: #ffffff;
            letter-spacing: 0.05in;
          }
          .timer{
            font-size: 25px;
            font-weight: 800;
            color: #7450a0;
            letter-spacing: normal;
          }
          
          
          
        .background {
          width: 430px;
          height: 520px;
        //   position: absolute;
        //   transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
        }

        .background .shape {
          height: 200px;
          width: 200px;
        //   position: absolute;
          border-radius: 50%;
        }

        .shape:first-child {
          background: linear-gradient(#1845ad, #23a2f6);
          left: -80px;
          top: -80px;
        }

        .shape:last-child {
          background: linear-gradient(to right, #ff512f, #f09819);
          right: -30px;
          bottom: -80px;
        }

        form {
          height: 520px;
          width: 400px;
          background-color: rgba(255, 255, 255, 0.13);
        //   position: absolute;
        //   transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          padding: 50px 35px;
        }

        form * {
          font-family: 'Poppins', sans-serif;
          color: #ffffff;
          letter-spacing: 0.5px;
          outline: none;
          border: none;
        }

        form h3 {
          font-size: 32px;
          font-weight: 500;
          line-height: 42px;
          text-align: center;
        }

        label {
          display: block;
          margin-top: 30px;
          font-size: 16px;
          font-weight: 500;
        }

        input {
          display: block;
          height: 50px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.07);
          border-radius: 3px;
          padding: 0 10px;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 300;
        }

        ::placeholder {
          color: #e5e5e5;
        }

        .button {
          margin-top: 50px !important;
          width: 100%;
          background-color: #ffffff !important;
          color: #080710  !important;
          padding: 15px 0  !important;
          font-size: 18px  !important;
          font-weight: 600  !important;
          border-radius: 5px  !important;
          cursor: pointer;
        }

      `}</style>
    </Stack>
  );
}

export default Login;
