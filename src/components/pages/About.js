import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Online Examination System</strong>, a cutting-edge platform designed to simplify and revolutionize the way exams are conducted and managed. 
          Our mission is to provide a seamless, efficient, and user-friendly solution for educational institutions, students, and administrators.
        </p>

        <h2>Who We Are</h2>
        <p>
          We are a team of passionate developers, educators, and technologists dedicated to enhancing the education experience through technology. Recognizing the 
          challenges of traditional examination processes, we set out to create a platform that streamlines the entire examination lifecycle—from registration to results.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li><strong>For Students:</strong> Effortless registration, taking exams, and tracking progress through a modern, intuitive interface.</li>
          <li><strong>For Educators and Administrators:</strong> Easy tools to create, manage, and monitor exams, saving valuable time and resources.</li>
        </ul>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Secure and Reliable System:</strong> Ensures the integrity of exams with advanced security measures.</li>
          <li><strong>User-Friendly Interface:</strong> Designed with simplicity and efficiency in mind for all users.</li>
          <li><strong>Real-Time Performance Tracking:</strong> Instant results and detailed analytics to measure performance.</li>
          <li><strong>Customizable Exams:</strong> Flexible tools for creating tests in various subjects and formats.</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We believe education is the foundation of progress, and technology is the key to unlocking its full potential. Our vision is to make education accessible, 
          inclusive, and effective by leveraging digital tools to create an engaging examination experience.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions, feedback, or suggestions? We’d love to hear from you! Reach out to our team at <a href="mailto:support@example.com">support@example.com</a>.
        </p>

        <h2>Join Us on Our Journey</h2>
        <p>
          Together, let’s embrace the future of education and make learning a truly enriching experience. Whether you’re a student, teacher, or institution, we are here 
          to support your success every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
