import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'


const initialFormValues = { 
      username: '',
      password: ''
}

const Login = () => {

  const [formValues, setFormValues] = useState(initialFormValues)


    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
      };

      const history = useHistory()


      const login = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/login", formValues)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.payload));
            history.push("/protected");
          })
          .catch((err) => console.log(err));

          setFormValues({credentials: {
              username: '',
              password: ''
          }})
      };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <br></br>
      <h2>Login</h2>
      <form onSubmit={login}>
          <label htmlFor="username">Username:</label>
          <input 
            id="username"
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            ></input>

          <br></br>

          <label>Password:</label>
          <input 
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}

            ></input>
          <br></br><br></br>
          <button className="login2" type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Login;
