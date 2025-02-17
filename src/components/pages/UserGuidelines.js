import React from "react";
import { Link } from "react-router-dom";
import "./UserGuidelines.css";

const UserGuidelines = () => {
  return (
    <div className="user-guidelines-container">
      <header className="header">
        <h1>User Guidelines</h1>
        <nav className="nav-links">
        </nav>
      </header>

      <main className="guidelines-content">
        <section className="intro-section">
          <h2>Welcome to Our Platform</h2>
          <p>
            To ensure a smooth experience while using our platform, please follow these guidelines. Our goal is to provide a safe, productive, and accessible environment for all users.
          </p>
        </section>

        <section className="section">
          <h3>1. Account Creation</h3>
          <p>
            To get started, create an account using your email address. Ensure that your account information is accurate and up-to-date to avoid any issues during your learning journey.
          </p>
        </section>

        <section className="section">
          <h3>2. Respectful Behavior</h3>
          <p>
            Treat all users with respect. Harassment, hate speech, or abusive behavior is not tolerated on this platform. Keep conversations constructive and positive.
          </p>
        </section>

        <section className="section">
          <h3>3. Course Access & Usage</h3>
          <p>
            Once registered, you'll have access to a variety of courses. Be mindful of copyright and intellectual property rights. Do not share content illegally or use it for commercial purposes.
          </p>
        </section>

        <section className="section">
          <h3>4. Participation in Live Classes</h3>
          <p>
            Engage in live classes by being punctual, respecting instructors, and asking relevant questions. Maintain an orderly environment for all participants.
          </p>
        </section>

        <section className="section">
          <h3>5. Privacy & Security</h3>
          <p>
            We value your privacy. Ensure that your personal information is protected. Use strong passwords and enable two-factor authentication (2FA) for added security.
          </p>
        </section>

        <section className="section">
          <h3>6. Reporting Issues</h3>
          <p>
            If you encounter any issues or notice violations of the guidelines, please report them using our feedback or support system. We are here to help and resolve any concerns.
          </p>
        </section>

        <section className="cta-section">
          <p>Have any questions? Reach out to our <Link to="/contact">support team</Link>.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Online Examination System</p>
        <p>Follow us on social media for updates!</p>
      </footer>
    </div>
  );
};

export default UserGuidelines;
