import React from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: " Feb 5th at 2:30pm",
      reminder: true,
    },

    {
      id: 2,
      text: "School Appointment",
      day: " Feb 6th at 1:30pm",
      reminder: true,
    },

    {
      id: 3,
      text: "food shopping",
      day: " Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}

    setTask ([...tasks, newTask])
  } 

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const toggleRrminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

  };
  return (    
    <div className="container">
      <Header onAdd={() => setShowAddTask(!setShowAddTask) } /> 
      {showAddTask && <AddTask  onAdd = {addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRrminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
}

export default App;
