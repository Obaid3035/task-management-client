import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Project from "./Project/Project";
import CreateProject from "./CreateProject/CreateProject";
import {mockProjects} from "../../utils/utils";
import {useNavigate} from "react-router-dom";
import CustomModal from "../../component/CustomModal/CustomModal";

export interface IUser {
    id: number,
    name: string,
    email: string
}

export type IAvatar = Omit<IUser, 'email'>[]

export interface ProjectForm {
    title: string,
    deadline: string
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

    const navigation = useNavigate();

    const [data, setData] = React.useState<ProjectData[]>(mockProjects);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [editData, setEditData] = React.useState<ProjectData | null>(null);

    const handleShow = () => setShowModal(true);

    const handleClose = () => {
        setShowModal(false);
        setEditData(null);
    }

    const onSubmitHandler = (formInput: ProjectForm) => {
        if (editData) {
            // Edit
            setEditData(null);
        } else {
            // Create
        }
    }

    const openEditModal = (id: number) => {
        setShowModal(true);
        const foundItem: ProjectData | undefined = data.find(item => item.id === id);
        const found: ProjectData | null = foundItem ? foundItem : null;
        setEditData(found);
    }


    return (
        <Container className={'mt-5'}>
            <CustomModal showModal={showModal} title={'Create Project'} handleClose={handleClose}>
                <CreateProject
                    editData={editData}
                    onCloseModal={handleClose}
                    onSubmit={onSubmitHandler}/>
            </CustomModal>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h4 className={'fw-bold'}>My Projects</h4>
                <Button className={'bg-black'} onClick={handleShow}>Create</Button>
            </div>
            <Row className={'justify-content-center align-items-center'}>
                {
                    mockProjects && mockProjects.length > 0 ? (
                        mockProjects.map((project) => {
                            return (
                                <Col key={project.id} md={3} className={'project mx-2 my-3'} onClick={() => navigation('/tasks')}>
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
