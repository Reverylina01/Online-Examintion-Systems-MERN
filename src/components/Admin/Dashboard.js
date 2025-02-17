import React, { useEffect, useState } from "react";
import { Button, Card, Table, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [exams, setExams] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const examsResponse = await fetch("http://localhost:5001/api/exams/");
        if (!examsResponse.ok) throw new Error(`HTTP error! status: ${examsResponse.status}`);
        const examsData = await examsResponse.json();
        setExams(examsData);

        const categoriesResponse = await fetch("http://localhost:5001/api/categories/");
        if (!categoriesResponse.ok) throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleEditExam = (id) => navigate(`/admin/edit-exam/${id}`);
  const handleCreateExam = () => navigate("/admin/create-exam");
  const handleViewUsers = () => navigate("/admin/students");
  const handleManageCategories = () => navigate("/admin/category");
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  // Function to delete an exam
  const handleDeleteExam = async (id) => {
    if (window.confirm("Are you sure you want to delete this exam?")) {
      try {
        const response = await fetch(`http://localhost:5001/api/exams/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete exam");

        // Remove the deleted exam from the state
        setExams(exams.filter((exam) => exam._id !== id));
      } catch (error) {
        console.error("Error deleting exam:", error);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={handleCreateExam}>Create Exam</li>
          <li onClick={handleViewUsers}>Manage Users</li>
          <li onClick={handleManageCategories}>Manage Categories</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </header>

        <section className="stats-cards">
          <Card className="stat-card green">
            <h3>5</h3>
            <p>Exams Created</p>
          </Card>
          <Card className="stat-card purple">
            <h3>3</h3>
            <p>Users Registered</p>
          </Card>
          <Card className="stat-card blue">
            <h3>30</h3>
            <p>Pending Reviews</p>
          </Card>
          <Card className="stat-card orange">
            <h3>59</h3>
            <p>Completed Exams</p>
          </Card>
        </section>

        {isLoading ? (
          <div className="loading-section">
            <Spinner animation="border" variant="light" />
            <p>Loading data...</p>
          </div>
        ) : (
          <>
            <section className="dashboard-content">
              <Card>
                <Card.Header>Exams List</Card.Header>
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Questions</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exams.map((exam, index) => (
                        <tr key={exam._id}>
                          <td>{index + 1}</td>
                          <td>{exam.title}</td>
                          <td>{exam.subject}</td>
                          <td>{exam.questions.length}</td>
                          <td>
                            <Button variant="info" onClick={() => handleEditExam(exam._id)}>Edit</Button>
                            <Button variant="danger" onClick={() => handleDeleteExam(exam._id)}>Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </section>

            <section className="dashboard-content">
              <Card>
                <Card.Header>Categories List</Card.Header>
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => (
                        <tr key={category._id}>
                          <td>{index + 1}</td>
                          <td>{category.name}</td>
                          <td>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger">Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
