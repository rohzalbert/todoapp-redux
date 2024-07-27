import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../actions/actions';
import './ListTask.css';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="filter-buttons">
        <button className="all" onClick={() => dispatch(filterTasks('ALL'))}>All</button>
        <button className="done" onClick={() => dispatch(filterTasks('DONE'))}>Done</button>
        <button className="not-done" onClick={() => dispatch(filterTasks('NOT_DONE'))}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
