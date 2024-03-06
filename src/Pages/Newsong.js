import React from "react";
import { Link } from "react-router-dom";

export default function Newsongs() {
  return (
    <p>
      <form action="addsong" method="post">
        <label>Song Name:</label>
        <input type="text" name="name" />
        <br />
        <br />

        <label>Song Artist:</label>
        <input type="text" name="artist" />
        <br />
        <br />

        <label>Song Genre:</label>
        <input type="text" name="genre" />
        <br />
        <br />

        <label>Song Link:</label>
        <input type="text" name="link" />
        <br />
        <br />

        <Link to="/adminhome">
          <input type="submit" value="ADD SONG" />
        </Link>
      </form>
    </p>
  );
}
