import React from 'react'
import './login.css';

const Login = () => {
    return (
        <div>
           <section id="login">
            <div class="main_div">
      <div class="box">
        <h1>Login</h1>
        <form action="">
          <div class="input-box">
            <input
              type="text"
              name="Username"
              id="name"
              autocomplete="off"
              required
            />
            <label for="Username">Username</label>
          </div>
          <div class="input-box">
            <input
              type="password"
              name="password"
              id="name"
              autocomplete="off"
              required
            />
            <label for="Password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
    </section>
        </div>
    )
}

export default Login
