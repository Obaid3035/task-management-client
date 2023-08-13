import React from 'react';
import { Col } from 'react-bootstrap';
import Task, { ITask } from './Task/Task';

interface TaskList {
    tasks: ITask[];
}

const TaskList: React.FC<TaskList> = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <Col key={task.id} md={3} className={'task mx-2 my-3'}>
                    <Task
                        id={task.id}
                        deadline={task.deadline}
                        title={task.title}
                        description={task.description}
                        users={task.users}
                        status={task.status}
                        priority={task.priority}
                    />
                </Col>
            ))}
        </>
    );
};

export default TaskList;
