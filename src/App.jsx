import { useState } from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Users from "./pages/Users";
import Error404 from "./pages/Error404";
import Navigation from "./Components/Navigation";
import CourseId from "./pages/Courses/CourseId";
import CourseName from "./pages/Courses/CourseName";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} >
          {/* <Route path="/users" element={<Navigate replace={true} to="/cources" />}/> */}
                 <Route path="users" element={<Users />}/>
                 <Route path="courses" element={<Courses />} />
                 <Route path="/courses/name" element={<CourseName />} />
                 <Route path=":courseId" element={<CourseId />} />
                 <Route index  element={<Home />}/>
          </Route>
          {/* <Route path='*' element={<Error404 />}/> */}
          <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
