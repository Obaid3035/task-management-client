import React from 'react';
import Avatar from "../../../component/Avatar/Avatar";
import { FiEdit2 } from 'react-icons/fi'
import './Project.css'
import { ProjectData} from "../Projects";

export interface IProject extends ProjectData{
    openEditModal: (id: number) => void
}


const Project: React.FC<IProject> = ({ id, created_at, completed_task, total_task, users, title, openEditModal}) => {
    let totalUsers = users.slice(0, 3);
    let remainingUsers = users.length - 3;



    return (
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-between">
                <h4 className={'mb-0 text-start'}>{created_at}</h4>
                <FiEdit2 onClick={() => openEditModal(id)}/>
            </div>
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
