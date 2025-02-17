import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empower Your Learning Journey</h1>
          <p>Start your learning path with us and transform your skills.</p>
          <div className="hero-buttons">
            <Link to="/login" className="take-exam-button">Take Exam</Link>
            <Link to="/login" className="premium-course-button">Premium Courses</Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="assets/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.webp"
            alt="Learning Model"
            className="model-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-container">
        <FeatureCard title="Personalized Courses" />
        <FeatureCard title="Live Doubt Solving Courses" />
        <FeatureCard title="Interactive Video Lessons" />
        <FeatureCard title="Mock Tests & Quizzes" />
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Online Examination System?</h2>
        <div className="benefits-container">
          <BenefitBox icon="💡" title="AI-Powered Learning" text="Personalized study plans based on your progress." />
          <BenefitBox icon="📝" title="Mock Tests & Practice Exams" text="Unlimited practice exams for better prep." />
          <BenefitBox icon="👩‍🏫" title="Expert Educators" text="Learn from top instructors & industry leaders." />
          <BenefitBox icon="🔒" title="Secure & Reliable" text="Advanced security for a fair examination process." />
        </div>
      </section>

      {/* Learning Stats Section */}
      <section className="learning-stats">
        <h2>Start Learning</h2>
        <p>Get unlimited access to structured courses & live doubt-solving sessions.</p>
        <div className="stats-container">
          <StatBox number="60+" label="Exam Categories" />
          <StatBox number="1.5k+" label="Daily Live Classes" />
          <StatBox number="3.2B+" label="Minutes Watched" />
          <StatBox number="14k+" label="Expert Educators" />
          <StatBox number="1M+" label="Video Lessons" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2>Online Examination System</h2>
            <p>Revolutionizing learning with accessible and affordable education.</p>
            <div className="app-links">
              <button>Download on the App Store</button>
              <button>Get it on Google Play</button>
            </div>
            <p className="contact">Call: +91 7679104825</p>
          </div>

          <div className="footer-sections">
            <div>
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3>Help & Support</h3>
              <ul>
                <li><Link to="/user-guidelines">User Guidelines</Link></li>
                <li><Link to="/grievance">Grievance Redressal</Link></li>
              </ul>
            </div>
            <div>
              <h3>Popular Courses</h3>
              <ul>
                <li><Link to="/courses">Python</Link></li>
                <li><Link to="/courses">Java</Link></li>
                <li><Link to="/courses">React</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2025 Online Examination Systems</p>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <button className="cta-button">Get Started</button>
  </div>
);

// Benefit Box Component
const BenefitBox = ({ icon, title, text }) => (
  <div className="benefit-box">
    <h3>{icon} {title}</h3>
    <p>{text}</p>
  </div>
);

// Stat Box Component
const StatBox = ({ number, label }) => (
  <div className="stat-box">
    <h3>{number}</h3>
    <p>{label}</p>
  </div>
);

export default Home;
