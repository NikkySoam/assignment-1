import React, { useState } from 'react';
import '../style/home.css';

function Home() {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!task.trim()) return;
    try {
      const response = await fetch('http://localhost:3000/api/task/create-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({task}),
      });
      const data = await response.json();
      if (response.ok) {
        setTask('');
      } else {
        setError(data.message || 'Failed to create task');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <main>
      <div className="home-container">
        <h1>Task Manager</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="task">New Task</label>
            <input
              id="task"
              name="task"
              type="text"
              placeholder="Enter task title"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          <button className="button primary-button" type="submit">Add Task</button>
        </form>
        <div className="tasks-list">
          
        </div>
      </div>
    </main>
  );
}

export default Home;