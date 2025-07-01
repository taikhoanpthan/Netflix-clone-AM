import React from "react";
import TodoList from "./components/TodoList";
import StudentManagement from "./components/StudentManagement";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div>
      {/* <TodoList/> */}
      {/* <StudentManagement /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
