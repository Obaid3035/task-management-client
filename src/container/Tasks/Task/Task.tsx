import React from 'react';
import { AiFillCheckCircle, AiFillPlusCircle } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import Avatar from "../../../component/Avatar/Avatar";
import './Task.css';


export interface ITask {
    deadline: string,
    title: string,
    description: string,
    users: string[],
    status: string,
    priority: string
}

const Task: React.FC<ITask> = ({ title, description, users, deadline, status, priority}) => {
    let totalUsers = users.slice(0, 3);
    let remainingUsers = users.length - 3;
    return (
        <React.Fragment>
            <div>
                <p>{ deadline }</p>
                <h4>{ title }</h4>
                <p className={'text-muted'}>{ description }</p>
                <div className="d-flex mt-3 align-items-center">
                    {
                        totalUsers.map((user) => (
                            <Avatar name={user}/>
                        ))
                    }
                    {
                        remainingUsers > 0 ? (
                            <Avatar name={`+ ${remainingUsers}`}/>
                        ) : null
                    }
                    <AiFillPlusCircle/>
                </div>
                <hr/>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <p className={'task_status'}>{ status }</p>
                    <p className={'task_priority'}>{ priority }</p>
                    <div>
                        <AiFillCheckCircle/>
                        <GiCancel/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Task;
