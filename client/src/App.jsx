import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import SignIn from "./pages/signin"
import SignUp from "./pages/signup"
import About from "./pages/about"
import Profile from "./pages/profile"
import Header from "./components/header.jsx";
export default function App(){
  return <HashRouter>
  <Header/>
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/Sign-Up" exact element={<SignUp />} />
    <Route path="/Sign-In" exact element={<SignIn />} />
    <Route path="/Profile" exact element={<Profile />} />
    <Route path="/About" exact element={<About />} />
    </Routes>
    </HashRouter>
};

