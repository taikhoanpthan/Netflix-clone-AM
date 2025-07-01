import React from "react";
import TodoList from "./components/TodoList";
import StudentManagement from "./components/StudentManagement";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App = () => {
  return (
    <div>
      {/* <TodoList/> */}
      {/* <StudentManagement /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/player/:id"
          element={
            <PrivateRoute>
              <Player />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
