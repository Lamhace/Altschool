import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";
import UserAccount from "./user-account";
import UserProfile from "./user-profile";
import PageNotFound from "./pagenotfound";

const About = () => {
    const baseUrl = "https://randomuser.me/api/?results=100"
    const [users, setUsers] = useState(null)
    console.log(users)
    useEffect(() => {
      axios.get(baseUrl).then((res) => {
        setUsers(res.data)
      })
    }, [])
    
    
    
  return (
    <div>
      <h1>About Page!</h1>
      <nav>
        <Link to="/about/user-profile">User Profiles</Link>{" "}
        <Link to="/about/user-account">User Account</Link>
      </nav>
      <Routes>
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="user-account" element={<UserAccount />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
};

export default About;
