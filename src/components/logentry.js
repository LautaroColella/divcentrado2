// components/LogEntry.js

import React from 'react';

// Recibe las props: date, content, y tasks
export default function LogEntry({ date, content, tasks }) {
  return (
    <article className="log-entry">
      <h3 className="log-entry-date">{date}</h3>
      <div className="log-entry-content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Renderiza la lista de tareas solo si existen */}
      {tasks && tasks.length > 0 && (
        <div className="task-section">
          <h4>Tareas Asignadas:</h4>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task.title}
                <span className="task-assignee">{task.assignee}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}