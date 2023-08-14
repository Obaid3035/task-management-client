import {ITask} from "../container/Tasks/Task/Task";

export interface IUser {
    id: number,
    name: string,
    email?: string
}

export interface IAuth extends Omit<IUser, 'id'>{
    password: string;
}

export interface ISelect {
    value: number,
    label: string
}

export interface IProjectData {
    id: number
    created_at: string,
    deadline: string,
    title: string,
    total_task: number,
    completed_task: number,
    users: IUser[]
}

export interface IProjectForm {
    title: string,
    deadline: string,
    users: ISelect[]
}

export interface ITaskForm extends Omit<ITask, 'users'> {
    users?: ISelect[]
}


export type ILogin = Omit<IAuth, 'name'>
