import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form action="validate" method="post">
        <h2>USER LOGIN</h2>
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <br />

        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <br />

        <Link to="/adminhome">
          <input type="submit" value="LOGIN" />
        </Link>
      </form>
    </div>
  );
}
