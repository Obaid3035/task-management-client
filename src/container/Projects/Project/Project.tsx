import React from 'react';
import Avatar from "../../../component/Avatar/Avatar";
import { FiEdit2 } from 'react-icons/fi'
import './Project.css'
import { ProjectData} from "../Projects";
import {remainingUsers} from "../../../utils/utils";

export interface IProject extends ProjectData{
    openEditModal: (id: number) => void
}


const Project: React.FC<IProject> = ({ id, created_at, completed_task, total_task, users, title, openEditModal}) => {
    const [total, remaining] = remainingUsers(users);
    const progress = (completed_task / total_task) * 100

    return (
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-between project_header">
                <p>{created_at}</p>
                <FiEdit2 onClick={() => openEditModal(id)}/>
            </div>
            <p className={'mt-3'}>{title}</p>
            <p className={'text-start my-3'}>Progress</p>
            <div className="progress_bar">
                <div className="filler" style={{width: `${progress}%`}}/>
            </div>
            <p className={'text-end my-2'}>{progress}%</p>
            <hr/>
            <div className={'d-flex align-item-center justify-content-between'}>
                <div className={'d-flex align-item-center '}>
                    {
                        total.length > 0 ? (
                            total.map((user) => (
                                <Avatar name={user}/>
                            ))
                        ) : 'No User'
                    }
                    {
                        remaining > 0 && (
                            <Avatar name={`+ ${remaining}`}/>
                        )
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
