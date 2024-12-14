import React, { useState } from "react";
import "./About.sass";

function About() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="about">
      <div className="main">
        <div className="content">
          <h1>About Us</h1>
          <p>
            This project was developed by a passionate student as part of an
            educational journey to master the latest web technologies. It is a
            non-commercial initiative created with the primary goal of exploring
            and implementing various aspects of frontend development. The
            project aims to provide a hands-on experience with modern tools and
            frameworks, while focusing on building efficient, interactive, and
            responsive web applications. In this project, the developer strives
            to gain a deep understanding of user interface design, performance
            optimization, and integration with external APIs. Every feature and
            design decision is made to push the boundaries of frontend
            development and create a seamless, engaging user experience. Through
            this project, the developer is also gaining valuable insights into
            maintaining clean and scalable code, adhering to best practices, and
            working with the latest industry trends. The project serves as a
            personal challenge to experiment with new technologies, improve
            problem-solving skills, and prepare for real-world development
            tasks. This project is not intended for commercial use but aims to
            showcase the learning journey, build a strong foundation for future
            work, and share the knowledge with the broader development
            community.
          </p>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/aleksandr-vilgelmov-6b9181303/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Mogreyn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <section className="project-plans">
        <h2>Project Development Plans</h2>
        <ul>
          <li>Implement more interactive UI components</li>
          <li>Enhance performance and optimize load times</li>
          <li>Build a backend for user authentication</li>
          <li>Expand the project with more features</li>
        </ul>
      </section>

      <section className="comments">
        <h2>Comments</h2>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment"
        />
        <button onClick={handleAddComment}>Add Comment</button>
        <div className="comment-list">
          {comments.map((com, index) => (
            <p key={index}>{com}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
