import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div>
      <h2>Registration Form</h2>
      <form action="register" method="post">
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <br />
        <label>Gender:</label>
        Male
        <input type="radio" name="gender" value="male" />
        Female
        <input type="radio" name="gender" value="female" />
        Other
        <input type="radio" name="gender" value="other" />
        <br />
        <br />
        <label>Role:</label>
        Admin
        <input type="radio" name="role" value="admin" />
        Customer
        <input type="radio" name="role" value="customer" />
        <br />
        <br />
        <label>Address:</label>
        <textarea name="address"></textarea>
        <br />
        <br />
        <Link to="/login">
          <input type="submit" value="SUBMIT" />
        </Link>
      </form>
    </div>
  );
}
