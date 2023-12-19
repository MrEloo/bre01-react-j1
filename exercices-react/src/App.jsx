import React from 'react';
import './App.css';
import { posts, skills } from './data.js';
import Skills from './Skills.jsx';
import Posts from './Posts.jsx';
import Recipe from './Recipe.jsx';
import Steps from './Steps.jsx';
import Students from './Students.jsx'
import Clock from './Clock.jsx'
import Diapo from './Diapo.jsx'
import Counter from './Counter.jsx'

const students = [
  { notes: [12, 11, 10], name: "Alan" },
  { notes: [18, 10, 19], name: "Alice" },
  { notes: [10, 9, 11], name: "Bernard" },
  { notes: [11, 17, 19], name: "Sophie" },
];



function App() {
  return (
    <>
      <Diapo timer={3000}/>
    </>
  );
}

export default App;


