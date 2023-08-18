import React from 'react';
import { Col } from 'react-bootstrap';
import Project from './Project/Project';
import {IProjectData} from "../../interface";

interface IProjectList{
    projects: IProjectData[];
}

const ProjectList: React.FC<IProjectList> = ({ projects }) => {
    return (
        <>
            {projects.map((project) => (
                <Col key={project.id} md={3} className={'project mx-2 my-3'}>
                    <Project
                        id={project.id}
                        deadline={project.deadline}
                        completed_task={project.completed_task}
                        created_at={project.created_at}
                        title={project.title}
                        total_task={project.total_task}
                        users={project.users}
                    />
                </Col>
            ))}
        </>
    );
};

export default ProjectList;
