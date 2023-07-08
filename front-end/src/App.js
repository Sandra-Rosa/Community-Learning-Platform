import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import SignInForm from './pages/Signin';
import LogInForm from './pages/Login';
import Home from './pages/Home';
import UserProfile from './pages/Profile';
import CourseForm from './pages/CourseForm';
import CourseList from './pages/CourseList';
import DiscussionForm from './pages//DiscussionForm';
import DiscussionList from './pages/DiscussionList';
import StudyGroupForm from './pages//StudyGroupForm';
import StudyGroupList from './pages/StudyGroupList';
import QuizForm from './pages/QuizForm';
import QuizList from './pages/QuizList';
function App() {
  // const user = {
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   username: 'johndoe123',
  //   bio: 'Passionate learner and developer.',
  //   location: 'New York, USA',
  // };
  // const [courses, setCourses] = useState([]);

  // const addCourse = (newCourse) => {
  //   setCourses([...courses, newCourse]);
  // };
  // const [discussions, setDiscussions] = useState([]);

  // const addDiscussion = (newDiscussion) => {
  //   setDiscussions([...discussions, newDiscussion]);
  // };
  // const [studyGroups, setStudyGroups] = useState([]);

  // const addStudyGroup = (newStudyGroup) => {
  //   setStudyGroups([...studyGroups, newStudyGroup]);
  // };
  // const [quizzes, setQuizzes] = useState([]);

  // const addQuiz = (newQuiz) => {
  //   setQuizzes([...quizzes, newQuiz]);
  // };
  const [discussions, setDiscussions] = useState([]);

  const addDiscussion = (newDiscussion) => {
    setDiscussions([...discussions, newDiscussion]);
  };

  return (

    <div className="App">
      {/* <SignInForm/> */}
      {/* <LogInForm/> */}
      {/* <Home /> */}
      {/* <UserProfile user={user} /> */}
      {/* <CourseForm addCourse={addCourse} />
      <CourseList courses={courses} /> */}
      {/* <DiscussionForm addDiscussion={addDiscussion} />
      <DiscussionList discussions={discussions} /> */}
      {/* <StudyGroupForm addStudyGroup={addStudyGroup} />
      <StudyGroupList studyGroups={studyGroups} /> */}
      {/* <QuizForm addQuiz={addQuiz} />
      <QuizList quizzes={quizzes} /> */}
       {/* <DiscussionForm addDiscussion={addDiscussion} />
      <DiscussionList discussions={discussions} /> */}

    </div>
  );
}

export default App;
