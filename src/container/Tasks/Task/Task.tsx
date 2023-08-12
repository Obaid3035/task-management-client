import React from 'react';
import { AiFillCheckCircle, AiFillPlusCircle } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import Avatar from "../../../component/Avatar/Avatar";
import './Task.css';
import {getColorForStatus, remainingUsers, truncateText} from "../../../utils/utils";
import {IAvatar} from "../../Projects/Projects";
import {TASK_PRIORITY, TASK_STATUS} from "../../../App";


export interface ITask {
    id: number
    deadline: string,
    title: string,
    description: string,
    users: IAvatar,
    status: string,
    priority: string
}

const Task: React.FC<ITask> = ({ title, description, users, deadline, status, priority}) => {
    const [total, remaining] = remainingUsers(users);
    return (
        <React.Fragment>
            <p className={'task_deadline'}>{ deadline }</p>
            <h4 className={'my-3'}>{ title }</h4>
            <p className={'text-muted task_description'}>{ truncateText(description, 100) }</p>
            <div className="d-flex mt-3 align-items-center">
                {
                    total.length > 0 ? (
                        total.map((user) => (
                            <Avatar name={user.name}/>
                        ))
                    ) : 'No User'
                }
                {
                    remaining > 0 && (
                        <Avatar name={`+ ${remaining}`}/>
                    )
                }
                <AiFillPlusCircle className={'add_users'}/>
            </div>
            <hr/>
            <div className={'d-flex justify-content-between align-items-center'}>
                <p
                    className={'task_status'}
                    style={{
                        backgroundColor: getColorForStatus(status).background,
                        color: getColorForStatus(status).color
                    }}
                >{ status }</p>
                <p
                    className={'task_priority'}
                    style={{
                        backgroundColor: getColorForStatus(priority).background,
                        color: getColorForStatus(priority).color
                    }}
                >{ priority }</p>
                <div>
                    <AiFillCheckCircle className={'toComplete'}/>
                    <GiCancel className={'toCancel'}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Task;
