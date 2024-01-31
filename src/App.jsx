import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle) {
    fetch('http://localhost:8000/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: taskTitle,
        is_completed: false,
      }),
    })
      .then(response => response.json())
      .then(newTask => setTasks([...tasks, newTask]))
      .catch(error => console.error('Error adding task:', error));
  }

  function deleteTaskById(taskId) {
    fetch(`http://localhost:8000/api/tasks/${taskId}/`, {
      method: 'DELETE',
    })
      .then(() => setTasks(tasks.filter(task => task.id !== taskId)))
      .catch(error => console.error('Error deleting task:', error));
  }

  function toggleTaskCompletedById(taskId) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasksAndSave(updatedTasks);

    fetch(`http://localhost:8000/api/tasks/${taskId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        is_completed: updatedTasks.find(task => task.id === taskId).isCompleted,
      }),
    })
      .then(response => response.json())
      .then(updatedTask => console.log('Task updated successfully:', updatedTask))
      .catch(error => console.error('Error updating task:', error));
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}

export default App;
