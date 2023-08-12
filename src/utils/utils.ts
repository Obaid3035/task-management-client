import {IAvatar, IUser} from "../container/Projects/Projects";

export const mockProjects = [
    {
        id: 0,
        created_at: 'December 10, 2020',
        deadline: 'December 10, 2020',
        title: 'Task Management System',
        total_task: 10,
        completed_task: 3,
        users: [{
            id: 1,
            name: 'Obaid Aqeel',
        }, {
            id: 3,
            name: 'Shayaan Sohail',
        }, { id: 4,
            name: 'Ali Rashid',
        }, {
            id: 5,
            name: 'Haisam Arshad'
        }]
    },
    {
        id: 1,
        created_at: 'December 10, 2020',
        deadline: 'December 10, 2020',
        title: 'Task Management System',
        total_task: 10,
        completed_task: 3,
        users: [{
            id: 1,
            name: 'Obaid Aqeel',
        }, {
            id: 3,
            name: 'Shayaan Sohail',
        }, { id: 4,
            name: 'Ali Rashid',
        }, {
            id: 5,
            name: 'Haisam Arshad'
        }]    },
    {
        id: 2,
        created_at: 'December 10, 2020',
        deadline: 'December 10, 2020',
        title: 'Task Management System',
        total_task: 10,
        completed_task: 3,
        users: [{
            id: 1,
            name: 'Obaid Aqeel',
        }, {
            id: 3,
            name: 'Shayaan Sohail',
        }, { id: 4,
            name: 'Ali Rashid',
        }, {
            id: 5,
            name: 'Haisam Arshad'
        }]    },
    {
        id: 3,
        created_at: 'December 10, 2020',
        deadline: 'December 10, 2020',
        title: 'Task Management System',
        total_task: 10,
        completed_task: 3,
        users: [{
            id: 1,
            name: 'Obaid Aqeel',
        }, {
            id: 3,
            name: 'Shayaan Sohail',
        }, { id: 4,
            name: 'Ali Rashid',
        }, {
            id: 5,
            name: 'Haisam Arshad'
        }]    },
]

export const mockTasks = [
    {
        deadline: 'August 10, 2020',
        title: 'Design Landing Page',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad'],
        status: 'IN_PROGRESS',
        priority: 'HIGH'
    },
    {
        deadline: 'August 10, 2020',
        title: 'Design Landing Page',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad'],
        status: 'IN_PROGRESS',
        priority: 'HIGH'
    },
    {
        deadline: 'August 10, 2020',
        title: 'Design Landing Page',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad'],
        status: 'IN_PROGRESS',
        priority: 'HIGH'
    },
    {
        deadline: 'August 10, 2020',
        title: 'Design Landing Page',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad'],
        status: 'IN_PROGRESS',
        priority: 'HIGH'
    },
]


export function remainingUsers(users: IAvatar): [IAvatar, number] {
    return [users.slice(0, 3), users.length - 3]
}


export function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
}

export function getColorForStatus(status: string) {
    let colorObj = {
        background: '#000000',
        color: '#FFFFFF'
    }

    switch (status) {
        case 'IN_PROGRESS':
        case 'MEDIUM':
            colorObj = {
                background: '#FEF2E7',
                color: '#F3AE5F'
            }
            break;
        case 'COMPLETED':
        case 'LOW':
            colorObj = {
                background: '#E6F9F6',
                color: '#3DBBA0'
            }
            break;
        case 'CANCELLED':
        case 'HIGH':
            colorObj = {
                background: '#FCE7EA',
                color: '#E7828C'
            }
            break;
    }
    return colorObj;
}
