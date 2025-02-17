import React, { useEffect, useState } from 'react';
import { Accordion, Button, Form, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditExam = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [exam, setExam] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showQuestionsModal, setShowQuestionsModal] = useState(false);

    useEffect(() => {
        const fetchExamDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/exams/${id}`);
                if (!response.ok) {
                    throw new Error(`Error fetching exam: ${response.status}`);
                }
                const data = await response.json();
                setExam(data);
                setQuestions(data.questions);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching exam details:', err);
                setIsLoading(false);
            }
        };
        fetchExamDetails();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExam((prevExam) => ({ ...prevExam, [name]: value }));
    };

    const handleQuestionChange = (index, field, value) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q, i) => (i === index ? { ...q, [field]: value } : q))
        );
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q, i) =>
                i === questionIndex
                    ? { ...q, options: q.options.map((option, optIndex) => (optIndex === optionIndex ? value : option)) }
                    : q
            )
        );
    };

    const handleDeleteQuestion = (index) => {
        setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
    };

    const handleSaveExam = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5001/api/exams/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...exam, questions }),
            });

            if (!response.ok) {
                throw new Error(`Error updating exam: ${response.status}`);
            }

            alert('Exam updated successfully!');
            navigate('/admin/');
        } catch (err) {
            console.error('Error updating exam:', err);
            alert('Failed to update exam. Please try again.');
        }
    };

    const toggleQuestionsModal = () => {
        setShowQuestionsModal(!showQuestionsModal);
    };

    if (isLoading) return <div>Loading...</div>;
    if (!exam) return <div>Exam not found.</div>;

    return (
        <div className="edit-exam-container">
            <h2>Edit Exam</h2>
            <Form onSubmit={handleSaveExam}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={exam.title || ''} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" value={exam.subject || ''} onChange={handleInputChange} required />
                </Form.Group>
                <Button variant="secondary" onClick={toggleQuestionsModal}>Edit Questions</Button>
                <Button variant="primary" type="submit" className="ms-3">Save Changes</Button>
            </Form>

            <Modal show={showQuestionsModal} onHide={toggleQuestionsModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Questions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion>
                        {questions.map((question, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>Question {index + 1}</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Question Text</Form.Label>
                                        <Form.Control type="text" value={question.text} onChange={(e) => handleQuestionChange(index, 'text', e.target.value)} placeholder="Enter question text" />
                                    </Form.Group>
                                    {question.options.map((option, optIndex) => (
                                        <Form.Group key={optIndex} className="mb-2">
                                            <Form.Label>Option {optIndex + 1}</Form.Label>
                                            <Form.Control type="text" value={option} onChange={(e) => handleOptionChange(index, optIndex, e.target.value)} placeholder={`Enter option ${optIndex + 1}`} />
                                        </Form.Group>
                                    ))}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Correct Option (0-3)</Form.Label>
                                        <Form.Control type="number" value={question.correctOption} onChange={(e) => handleQuestionChange(index, 'correctOption', parseInt(e.target.value, 10))} placeholder="Enter correct option index" min="0" max={question.options.length - 1} />
                                    </Form.Group>
                                    <Button variant="danger" onClick={() => handleDeleteQuestion(index)}>Delete Question</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleQuestionsModal}>Close</Button>
                    <Button variant="primary" onClick={toggleQuestionsModal}>Save Questions</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditExam;
