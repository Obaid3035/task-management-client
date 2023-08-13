import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Project from "./Project/Project";
import CreateProject from "./CreateProject/CreateProject";
import {mockProjects} from "../../utils/utils";
import CustomModal from "../../component/CustomModal/CustomModal";
import CustomButton from "../../component/Button/Button";

export interface IUser {
    id: number,
    name: string,
    email: string
}

export type IAvatar = Omit<IUser, 'email'>[]

export interface ISelect {
    value: number,
    label: string
}

export interface ProjectForm {
    title: string,
    deadline: string,
    users: ISelect[]
}

export interface ProjectData {
    id: number
    created_at: string,
    deadline: string,
    title: string,
    total_task: number,
    completed_task: number,
    users: IAvatar
}


const Projects = () => {


    const [data, setData] = React.useState<ProjectData[]>(mockProjects);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [editProject, setEditProject] = React.useState<ProjectForm | null>(null);

    const handleShow = () => setShowModal(true);

    const handleClose = () => {
        setShowModal(false);
        setEditProject(null);
    }

    const onSubmitHandler = (formInput: ProjectForm) => {
        if (editProject) {
            // Edit
            setEditProject(null);
        } else {
            // Create
        }
    }

    const openEditModal = (id: number) => {
        setShowModal(true);
        const found: ProjectData = data.find(item => item.id === id)!
        setEditProject({
            title: found.title,
            users: found.users.map((user) => {
                return {
                    value: user.id,
                    label: user.name
                }
            }),
            deadline: found.deadline
        });
    }


    return (
        <Container className={'mt-5'}>
            <CustomModal showModal={showModal} title={'Create Project'} handleClose={handleClose}>
                <CreateProject
                    editData={editProject}
                    onCloseModal={handleClose}
                    onSubmit={onSubmitHandler}/>
            </CustomModal>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h4 className={'fw-bold'}>My Projects</h4>
                <CustomButton handleShow={handleShow}>Create</CustomButton>
            </div>
            <Row className={'justify-content-center align-items-center'}>
                {
                    mockProjects && mockProjects.length > 0 ? (
                        mockProjects.map((project) => {
                            return (
                                <Col key={project.id} md={3} className={'project mx-2 my-3'}>
                                    <Project
                                        id={project.id}
                                        deadline={project.deadline}
                                        openEditModal={openEditModal}
                                        completed_task={project.completed_task}
                                        created_at={project.created_at}
                                        title={project.title}
                                        total_task={project.total_task}
                                        users={project.users}/>
                                </Col>
                            )
                        })
                    ) : (
                        <div>
                            No Projects Found
                        </div>
                    )
                }

            </Row>
        </Container>
    );
};

export default Projects;
