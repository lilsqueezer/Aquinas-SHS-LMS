import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/courses/")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const containerStyle = {
    maxWidth: "700px",
    margin: "2rem auto",
    fontFamily: "Arial, sans-serif",
    padding: "0 1rem",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  const cardStyle = {
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1.5rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
    borderLeft: "6px solid #4a90e2", // accent color bar
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Courses</h2>
      {courses.length === 0 ? (
        <p>No courses found</p>
      ) : (
        courses.map((course) => (
          <div
            key={course.id}
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={titleStyle}>{course.title}</div>
            <p>{course.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Courses;
