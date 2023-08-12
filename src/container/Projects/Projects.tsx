import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Project from "./Project/Project";


const Projects = () => {

    const mockProjects = [
        {
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
        {
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
        {
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
        {
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
    ]

    return (
        <Container className={'mt-5'}>
            <Row className={'justify-content-center'}>

                {
                    mockProjects.map((project) => {
                        return (
                            <Col md={3} className={'project mx-2 my-3'}>
                                <Project
                                    completed_task={project.completed_task}
                                    created_at={project.created_at}
                                    title={project.title}
                                    total_task={project.total_task}
                                    users={project.users}/>
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    );
};

export default Projects;
