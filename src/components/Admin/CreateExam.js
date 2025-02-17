import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState,useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function CreateExam() {
    const navigate = useNavigate();
    const [examTitle, setExamTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [questions, setQuestions] = useState([]);
const [data, setData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({
        text: "",
        options: ["", "", "", ""],
        correctOption: 0,
    });
const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Function to fetch data using Axios
    const fetchData1 = async () => {
      try {
        handleClose();
        localStorage.setItem("id", "");
        localStorage.setItem("Name", "");
        //const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const response = await axios("http://localhost:5001/api/categorys/list");
        console.log(response.data.categories);
        setData(response.data.categories);
        console.log('A'+data);
        console.log("data"+response.data);
        //console.log("data"+response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
     useEffect(() => {
          fetchData1();
        }, []);
    const addQuestion = () => {
        if (currentQuestion.text.trim() === '' || currentQuestion.options.some(opt => opt.trim() === '')) {
            alert('Please fill in all question fields');
            return;
        }
        setQuestions([...questions, { ...currentQuestion }]);
        setCurrentQuestion({ text: "", options: ["", "", "", ""], correctOption: 0 });
    };

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...currentQuestion.options];
        updatedOptions[index] = value;
        setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        if (questions.length === 0) {
            alert('Please add at least one question');
            return;
        }

        const newExam = {
            title: examTitle,
            subject: subject,
            questions: questions,
        };

        try {
            const response = await fetch("http://localhost:5001/api/exams", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newExam),
            });

            if (!response.ok) {
                throw new Error(`Failed to create exam: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Exam created:", data);
            navigate("/admin/");
        } catch (err) {
            console.error("Error creating exam:", err.message);
            alert(`Failed to create exam: ${err.message}`);
        }
    };

    return (
        <div className="mainleft">
            <h1>Create Exam</h1>
            <Form
                className="d-grid gap-2"
                style={{ margin: "2rem" }}
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3" controlId="formExamTitle">
                    <Form.Control
                        type="text"
                        value={examTitle}
                        onChange={(e) => setExamTitle(e.target.value)}
                        placeholder="Enter Exam Title"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formExamSubject">
                <Form.Select
                        onChange={(e) =>
                            setSubject(e.target.options[e.target.selectedIndex].text)
                        }
                        
                        placeholder="Select Subject"
                        required>
<option>Select Subject</option>
	 {data.map((item1) => {
            return(
            <option value={item1._id}>{item1.name}</option>
            );
        })}
        </Form.Select>
                    
                    </Form.Group>
                
                {/* <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Control
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter Subject"
                        required
                    />
                </Form.Group> */}

                <h3>Add Questions</h3>
                <Form.Group className="mb-3" controlId="formQuestionText">
                    <Form.Control
                        type="text"
                        value={currentQuestion.text}
                        onChange={(e) =>
                            setCurrentQuestion({ ...currentQuestion, text: e.target.value })
                        }
                        placeholder="Enter Question Text"
                    />
                </Form.Group>

                {currentQuestion.options.map((option, index) => (
                    <Form.Group
                        className="mb-3"
                        key={index}
                        controlId={`formOption${index}`}
                    >
                        <Form.Control
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            placeholder={`Option ${index + 1}`}
                        />
                    </Form.Group>
                ))}

                <Form.Group className="mb-3" controlId="formCorrectOption">
                    <Form.Select
                        value={currentQuestion.correctOption}
                        onChange={(e) =>
                            setCurrentQuestion({
                                ...currentQuestion,
                                correctOption: Number(e.target.value),
                            })
                        }
                    >
                        {currentQuestion.options.map((_, index) => (
                            <option key={index} value={index}>
                                Correct Option {index + 1}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button variant="secondary" onClick={addQuestion}>
                    Add Question
                </Button>

                <h4>Questions Preview</h4>
                <ul>
                    {questions.map((q, i) => (
                        <li key={i}>
                            {q.text} (Correct: Option {q.correctOption + 1})
                        </li>
                    ))}
                </ul>

                <Button variant="primary" type="submit">
                    Submit Exam
                </Button>
            </Form>
            
            <Link className="d-grid gap-2" to="/">
                <Button variant="info" size="lg">
                    Home
                </Button>
            </Link>
        </div>
    );
}

export default CreateExam;