import React from "react";
import { Link } from "react-router-dom";
import "./OurCourses.css"; // Import custom CSS for styling

const OurCourses = () => {
  const courses = [
    {
      id: 1,
      title: "C Programming",
      description: "Master the fundamentals of C programming.",
      link: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
      image: "/assets/maxresdefault (30).jpg",
    },
    {
      id: 2,
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts.",
      link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
      image: "/assets/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "React Development",
      description: "Build modern web apps with React.js.",
      link: "https://www.youtube.com/watch?v=bMknfKXIFA8",
      image: "/assets/maxresdefault (29).jpg",
    },
    {
      id: 4,
      title: "Django",
      description: "Build powerful web applications using Django.",
      link: "https://www.youtube.com/watch?v=F5mRW0jo-U4",
      image: "/assets/django.jpg",
    },
    {
      id: 5,
      title: "Laravel Framework",
      description: "Learn Laravel for modern PHP web development.",
      link: "https://www.youtube.com/watch?v=ImtZ5yENzgE",
      image: "/assets/laravel.jpg",
    },
    {
      id: 6,
      title: "PHP Development",
      description: "Start building dynamic websites with PHP.",
      link: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
      image: "/assets/php.jpg",
    },
  ];

  return (
    <div className="our-courses-section">
      <h2>Our Courses</h2>
      <p>Browse through our specially designed courses to help you succeed.</p>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-header">
              <h3>{course.title}</h3>
            </div>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <p className="course-description">{course.description}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-learn-more"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Modified Footer Section */}
      <footer className="footer-section">
        <div className="footer-bottom">
          <p>&copy; 2025 Online Examination System. All rights reserved.</p>
          <div className="footer-links">
             <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/about">About Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurCourses;
