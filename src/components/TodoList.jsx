import React, { useState } from "react";
import { toast } from "react-toastify";

const TodoList = () => {
  const [students, setStudents] = useState([]); // Danh sách sinh viên
  const [inputValue, setInputValue] = useState(""); // Giá trị nhập vào
  const [editingIndex, setEditingIndex] = useState(null); // Chỉ số sinh viên đang chỉnh sửa (nếu có)

  // Hàm thêm hoặc cập nhật sinh viên
  const handleSave = () => {
    if (inputValue.trim() === "") {
      toast.error("Please enter a student name!");
      return;
    }

    if (editingIndex !== null) {
      // Đang ở chế độ chỉnh sửa
      const updatedStudents = students.map((student, i) =>
        i === editingIndex ? inputValue : student // Cập nhật sinh viên tại vị trí đang chỉnh sửa
      );
      setStudents(updatedStudents);
      setEditingIndex(null); // Thoát chế độ chỉnh sửa
      toast.success("Student updated successfully!");
    } else {
      // Đang ở chế độ thêm mới
      setStudents([...students, inputValue]); // Thêm sinh viên mới vào danh sách
      toast.success("Student added successfully!");
    }

    setInputValue(""); // Xóa nội dung trong ô input
  };

  // Hàm bật chế độ chỉnh sửa
  const editStudent = (index) => {
    setInputValue(students[index]); // Hiển thị tên sinh viên cần chỉnh sửa trong ô input
    setEditingIndex(index); // Lưu chỉ số sinh viên đang chỉnh sửa
  };

  // Hàm xóa sinh viên
  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index); // Loại bỏ sinh viên tại vị trí `index`
    setStudents(updatedStudents);
    toast.info("Student removed successfully!");
  };

  return (
    <div className="container">
      <h2>Student Management</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter student name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Cập nhật giá trị nhập vào
        />
        <button className="btn btn-primary" onClick={handleSave}>
          {editingIndex !== null ? "Update Student" : "Add Student"} {/* Đổi nút lưu thành cập nhật nếu đang chỉnh sửa */}
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => editStudent(index)} // Bật chế độ chỉnh sửa
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStudent(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No students found. Please add a student.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
