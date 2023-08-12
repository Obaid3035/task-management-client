import React from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Project from "./Project/Project";
import CreateProject from "./CreateProject/CreateProject";
import {mockProjects} from "../../utils/utils";
import {useNavigate} from "react-router-dom";

export interface IFormData {
    title: string
}

export interface ProjectData {
    id: number
    created_at: string,
    title: string,
    total_task: number,
    completed_task: number,
    users: string[],
}



const Projects = () => {
    const navigation = useNavigate();

    const [data, setData] = React.useState(mockProjects);
    const [showModal, setShowModal] = React.useState(false);
    const [editingData, setEditingData] = React.useState<ProjectData | null>(null);

    const handleShow = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
        setEditingData(null);
    }


    const onSubmitHandler = (formInput: IFormData) => {
        if (editingData) {
            const updatedData = data.map((item) => (item.id === editingData.id ? {
                ...item,
                title: formInput.title
            } : item));
            setData(updatedData);
            setEditingData(null);
        } else {
            // Create
        }
    }


    const openEditModal = (id: number) => {
        setShowModal(true);
        const foundItem: ProjectData | undefined = data.find(item => item.id === id);
        const found: ProjectData | null = foundItem ? foundItem : null;
        setEditingData(found);
    }


    return (
        <Container className={'mt-5 projects_container'}>
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>Create Project</Modal.Title>
                    <Button className={'bg-black'} onClick={handleClose}>&times;</Button>

                </Modal.Header>
                <Modal.Body>
                    <CreateProject
                        editingData={editingData}
                        onCloseModal={handleClose}
                        onSubmit={onSubmitHandler}/>
                </Modal.Body>
            </Modal>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h4 className={'fw-bold'}>My Projects</h4>
                <Button className={'bg-black'} onClick={handleShow}>Create</Button>
            </div>
            <Row className={'justify-content-center'}>

                {
                    mockProjects.map((project) => {
                        return (
                            <Col md={3} className={'project mx-2 my-3'} onClick={() => navigation('/tasks')}>
                                <Project
                                    id={project.id}
                                    openEditModal={openEditModal}
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
