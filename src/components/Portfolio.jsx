import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <div className="portfolio-list">
        <div className="portfolio-item">
          <h2>Project Management Tool</h2>
          <p>A comprehensive project management tool that helps teams plan, track, and manage projects in real-time. Features include task management, time tracking, and reporting.</p>
        </div>
        <div className="portfolio-item">
          <h2>E-commerce Platform</h2>
          <p>An e-commerce platform designed to provide a seamless shopping experience. Includes features like product listings, secure checkout, order tracking, and customer reviews.</p>
        </div>
        <div class="portfolio-item">
          <h2>Healthcare Management System</h2>
          <p>A robust healthcare management system that integrates patient records, appointment scheduling, billing, and telehealth services. Ensures compliance with healthcare regulations.</p>
        </div>
        <div className="portfolio-item">
          <h2>Financial Analytics Dashboard</h2>
          <p>A financial analytics dashboard that provides real-time insights into financial data. Features include data visualization, predictive analytics, and custom reporting.</p>
        </div>
        <div className="portfolio-item">
          <h2>AI-Powered Chatbot</h2>
          <p>An AI-powered chatbot designed to enhance customer service. Can handle customer inquiries, provide support, and even assist with sales. Integrates with various messaging platforms.</p>
        </div>
        <div className="portfolio-item">
          <h2>Online Learning Platform</h2>
          <p>An online learning platform offering a wide range of courses. Features include video lectures, interactive quizzes, forums, and progress tracking. Supports both self-paced and instructor-led courses.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
