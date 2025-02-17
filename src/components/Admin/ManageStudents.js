import React, { useEffect, useState } from "react";
import { Button, Card, Table } from 'react-bootstrap';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);


  const fetchStudentData = async () => {
    try {
      const studentData = await fetch("http://localhost:5001/api/users/");
      if (!studentData.ok) {
        throw new Error(`HTTP error! status: ${studentData.status}`);
      }
      const studentsResponse = await studentData.json();
      setStudents(studentsResponse);
      console.log(studentsResponse);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleEditStudent = (studentId) => {
    console.log(studentId);
  }



  const handleDelete = async (studentId) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this student?");
    if (!confirmDeletion) return;
    try {
      const response = await fetch(`http://localhost:5001/api/users/${studentId}`,{
        method: 'DELETE',
      });
      const data = await response.json();
      setStudents((prevStudent) => prevStudent.filter((student) => student._id !== studentId));
    } catch (error) {
    }

  }

  useEffect(() => {
    fetchStudentData();
  }, [])
  console.log(students)

  return (
    <div className="container mt-5">
      <h2>Manage Students</h2>
      {
        students.length== 0 ? <p style={{color:"black"}} className="">No students found</p> :  <Card className="mb-4">
        <Card.Header>
          <h4>Students</h4>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <Button variant="info" onClick={() => handleEditStudent(student._id)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(student._id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      }
     
    </div>
  );
};

export default ManageStudents;
