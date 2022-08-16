import React from 'react';
import { ITask } from '../Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline} días</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}><FontAwesomeIcon icon={faXmark} className="deleteIcon" /></button>
        </div>
    );
};

export default TodoTask;