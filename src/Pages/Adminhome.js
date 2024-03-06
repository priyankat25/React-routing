import React from "react";

export default function Adminhome() {
  return (
    <div>
      <h3>ADMIN HOME</h3>

      <form action="newsong">
        <input type="submit" value="ADD SONGS" />
      </form>
      <br />
      <br />

      <form action="viewsongs">
        <input type="submit" value="VIEW SONGS" />
      </form>
      <br />
      <br />

      <form action="createplaylists">
        <input type="submit" value="CREATE PLAYLIST" />
      </form>
      <br />
      <br />

      <form action="viewplaylists">
        <input type="submit" value="VIEW PLAYLISTS" />
      </form>
    </div>
  );
}
