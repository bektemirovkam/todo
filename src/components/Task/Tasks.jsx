import React from "react";

import "./Task.scss";
import editSvg from "../../assets/icons/editing.svg";
import Task from "./Task";
import AddTask from "./AddTask";

const Tasks = ({
  currentList,
  editList,
  addNewTask,
  deleteTask,
  editTaskText,
  withEmpty,
  toggleСompleteTask,
}) => {
  const handleClickOnEdit = () => {
    const newName = window.prompt(
      "Введите новое название листа",
      currentList.name
    );
    if (newName) {
      editList(currentList.id, newName);
    }
  };
  return (
    <div className="task">
      <h2 className="task__title" style={{ color: currentList.color.hex }}>
        <span>{currentList.name}</span>
        <img src={editSvg} alt="editing" onClick={handleClickOnEdit} />
      </h2>
      {!withEmpty && !currentList.tasks.length && (
        <h2 className="task__empty">Задачи отсутствуют</h2>
      )}
      <ul className="task__list">
        {currentList.tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              deleteTask={deleteTask}
              currentList={currentList}
              editTaskText={editTaskText}
              toggleСompleteTask={toggleСompleteTask}
            />
          );
        })}
      </ul>
      <AddTask
        key={currentList.id}
        currentList={currentList}
        addNewTask={addNewTask}
      />
    </div>
  );
};

export default Tasks;
