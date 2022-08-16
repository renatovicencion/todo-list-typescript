import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };

    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
  };

  useEffect(() => {
    if (task && deadline) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [task, deadline]);
  
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input 
            type="text" 
            name="task"
            value={task}
            placeholder="Tarea..." 
            onChange={handleChange} 
          />
          <input 
            type="number" 
            name="deadline"
            value={String(deadline).replace(/^0+/, '')}
            min={0}
            placeholder="Tiempo estimado (días)..." 
            onChange={handleChange} 
          />
        </div>
        <button className={`addBtn ${isValid ? "" : "disabledBtn" }`} onClick={addTask} disabled={isValid ? false : true}>Agregar Tarea</button>
      </div>

      <div className="todoList">
        {
          todoList.map((task: ITask, key: number) => (
            <TodoTask key={key} task={task} completeTask={completeTask} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
