import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <section className="policy-section">
        <h2>Introduction</h2>
        <p>
          Welcome to our Online Examination System. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data.
        </p>
      </section>

      <section className="policy-section">
        <h2>Information Collection</h2>
        <p>
          We collect personal information such as your name, email address, and registration details when you sign up for our platform. This information is used to provide services and improve user experience.
        </p>
      </section>

      <section className="policy-section">
        <h2>Data Usage</h2>
        <p>
          The information we collect is used to manage exams, provide results, communicate with users, and enhance our platform’s functionality. We may also use your data to send updates and notifications related to your account or services.
        </p>
      </section>

      <section className="policy-section">
        <h2>Data Protection</h2>
        <p>
          We employ industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, please note that no method of data transmission over the Internet is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="policy-section">
        <h2>User Rights</h2>
        <p>
          As a user, you have the right to access, update, or delete your personal data. If you wish to exercise any of these rights, please contact us. We will respond to your request as promptly as possible, in accordance with applicable laws.
        </p>
      </section>

      <section className="policy-section">
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the “Last Updated” date will be revised accordingly. We encourage you to review this Privacy Policy periodically.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
