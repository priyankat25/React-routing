import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Adminhome from "./Pages/Adminhome";
import Newsong from "./Pages/Newsong";
import Displaysongs from "./Pages/Displaysongs";
import Createplaylists from "./Pages/Createplaylists";
import Displayplaylist from "./Pages/displayplaylist";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/adminhome" element={<Adminhome />}></Route>
          <Route path="/newsong" element={<Newsong />}></Route>
          <Route path="/viewsongs" element={<Displaysongs />}></Route>
          <Route path="/createplaylists" element={<Createplaylists />}></Route>
          <Route path="/viewplaylists" element={<Displayplaylist />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
