import React from 'react';
import './Project.css'
import Avatar from "../../../component/Avatar/Avatar";

export interface IProject {
    id?: number
    created_at: string,
    title: string,
    total_task: number,
    completed_task: number,
    users: string[]
}

const Project: React.FC<IProject> = ({ created_at, completed_task, total_task, users, title}) => {
    let totalUsers = users.slice(0, 3);
    let remainingUsers = users.length - 3;



    return (
        <React.Fragment>
            <h4 className={'mb-0 text-start'}>{created_at}</h4>
            <p className={'mt-3'}>{title}</p>
            <p className={'text-start my-3'}>Progress</p>
            <div className="progress_bar">
                <div className="filler" style={{width: `${(completed_task / total_task) * 100}%`}}/>
            </div>
            <p className={'text-end my-2'}>{(completed_task / total_task) * 100}%</p>
            <hr/>
            <div className={'d-flex align-item-center justify-content-between'}>
                <div className={'d-flex align-item-center '}>
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

                </div>

                <div className={'task_label'}>
                    <p>Task</p>
                    <p>{completed_task}/{total_task}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
