import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/courses/${id}`)
            .then(response => setCourse(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const handlePayment = async () => {
        try {
            // Request to create payment order
            const response = await axios.post('http://localhost:5001/api/payment/create-payment-order', {
                courseId: id
            });

            const { id: orderId, amount, currency } = response.data;

            // Initialize Razorpay
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Razorpay Key ID
                amount: amount,
                currency: currency,
                name: course.title,
                description: course.description,
                order_id: orderId,
                handler: function (response) {
                    console.log(response);  // Payment success details
                    // Call backend to confirm payment, store the order, etc.
                    alert("Payment Successful!");
                },
                prefill: {
                    name: "User Name",
                    email: "user@example.com",
                    contact: "9999999999"
                },
                notes: {
                    address: "Razorpay Test Address"
                },
                theme: {
                    color: "#F37254"
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error("Error creating payment order:", error);
        }
    };

    return (
        <div>
            {course && (
                <div>
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>
                    <button onClick={handlePayment}>Buy Now - ₹{course.price}</button>
                </div>
            )}
        </div>
    );
};

export default CoursePage;
