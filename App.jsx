import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ayush", score: 75 },
    { id: 2, name: "Krish", score: 35 },
  ]);

  const addStudent = (name, score) => {
    setStudents([...students, { id: Date.now(), name, score: Number(score) }]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map((s) => s.id === id ? { ...s, score: Number(newScore) } : s));
  };

  return (
    <div className="app">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;