import React from 'react'
import Home from "./Home/page";
//import Course from './components/Course';
import {Navigate, Route,Routes} from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App(){
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      {/*<Home />
      <Course/>*/}
      <Routes>
        <Route path="/" element={<Home />}/>
    
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
//<Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
//matlab agar authuser h toh hi courses page p le jao warna back to signup as we need to register for seeing paisd courses in the course page