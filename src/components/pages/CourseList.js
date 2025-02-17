import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CourseList.css';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [paidCourses, setPaidCourses] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5001/api/courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error(error));
    }, []);

    const allCourses = [
        { _id: 'premium1', title: 'WordPress', price: 499, imageUrl: 'https://i.ytimg.com/vi/r-lqV7vyZt4/maxresdefault.jpg', videoUrl: 'https://youtu.be/Bx3qRM19BYM?si=cTNi-pclN75u-Lbp' },
        { _id: 'premium2', title: 'Django', price: 499, imageUrl: 'https://i.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg', videoUrl: 'https://youtu.be/F5mRW0jo-U4?si=aSgPiy-X-fE0XtI_' },
        { _id: 'premium3', title: 'Dart', price: 499, imageUrl: 'https://i.ytimg.com/vi/Ej_Pcr4uC2Q/maxresdefault.jpg', videoUrl: 'https://youtu.be/71xacArT_70?si=SrhbWzKjzKqJuYRB' },
        { _id: 'premium4', title: 'Kotlin', price: 499, imageUrl: 'https://i.ytimg.com/vi/d2AHFZ-QLqo/maxresdefault.jpg', videoUrl: 'https://youtu.be/FlBhpm9aRUg?si=CqViCVeG_R-5_xfR' },
        { _id: 'premium5', title: 'React Native', price: 499, imageUrl: 'https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg', videoUrl: 'https://youtu.be/0-S5a0eXPoc?si=eUbB9zG_bP_DfAef' },
        { _id: 'premium6', title: 'Swift Programming', price: 499, imageUrl: 'https://i.ytimg.com/vi/comQ1-x2a1Q/maxresdefault.jpg', videoUrl: 'https://youtu.be/comQ1-x2a1Q?si=RiG8UHB8BpP6A78p' }

    ];

    const handlePayment = (course) => {
        const options = {
            key: "rzp_test_bP6RDg6xsTyfBa",
            amount: course.price * 100,
            currency: "INR",
            name: "Online Course Payment",
            description: `Payment for ${course.title}`,
            handler: function (response) {
                alert("Payment Successful! You can now watch the video.");
                setPaidCourses((prev) => ({ ...prev, [course._id]: true }));
            },
            prefill: {
                name: "Student Name",
                email: "student@example.com",
                contact: "9999999999"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="course-container">
            <h1>Available Courses</h1>
            <div className="course-list">
                {allCourses.map(course => (
                    <div key={course._id} className="course-card">
                        <img src={course.imageUrl} alt={course.title} className="course-image" />
                        <h3>{course.title}</h3>
                        <p>Price: {course.price === 0 ? "Free" : `₹${course.price}`}</p>
                        <div className="buttons">
                            {course.price === 0 ? (
                                <a href={course.videoUrl} target="_blank" rel="noopener noreferrer" className="watch-button">
                                    Watch Video
                                </a>
                            ) : !paidCourses[course._id] ? (
                                <button className="pay-button" onClick={() => handlePayment(course)}>Pay & Access Video</button>
                            ) : (
                                <a href={course.videoUrl} target="_blank" rel="noopener noreferrer" className="watch-button">
                                    Watch Video
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
