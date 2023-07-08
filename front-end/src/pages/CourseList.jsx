import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div>
      <h2>Course List</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>File: {course.file ? course.file.name : 'No file uploaded'}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
