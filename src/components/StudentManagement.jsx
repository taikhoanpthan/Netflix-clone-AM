import { Button, Form, Input, Modal, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

function StudentManagement() {
  const [dataSource, setDataSource] = useState([]);
  const [form] = useForm();
  const [openModal, setOpenModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null); // Để theo dõi sinh viên đang được chỉnh sửa

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => editStudent(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => deleteStudent(record.key)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const openM = () => {
    setOpenModal(true);
  };

  const hideM = () => {
    setOpenModal(false);
    form.resetFields();
    setEditingStudent(null); // Xóa trạng thái chỉnh sửa
  };

    const handleSubmit = (values) => {
        if (editingStudent) {
        // Cập nhật sinh viên
        setDataSource((prev) =>
            prev.map((student) =>
            student.key === editingStudent.key ? { ...student, ...values } : student
            )
        );
        } else {
        // Thêm sinh viên mới
        setDataSource([...dataSource, { key: Date.now(), ...values }]);
        }
        hideM();
    };

  const handleOk = () => {
    form.submit();
  };

  const deleteStudent = (key) => {
    setDataSource((prev) => prev.filter((student) => student.key !== key));
  };

  const editStudent = (record) => {
    setEditingStudent(record);
    form.setFieldsValue(record); // Đổ dữ liệu vào form
    openM();
  };

  return (
    <div>
      <Button type="primary" onClick={openM}>
        Add new Student
      </Button>
      <Table dataSource={dataSource} columns={columns} rowKey="key" />
      <Modal
        title={editingStudent ? "Edit Student" : "Add new Student"}
        open={openModal}
        onCancel={hideM}
        onOk={handleOk}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Student Name"
            rules={[{ required: true, message: "Please enter a student name" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default StudentManagement;
