import React from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Project, {IProject} from "./Project/Project";
import CreateProject from "./CreateProject/CreateProject";

export interface IFormData {
    title: string
}


const Projects = () => {



    const [showModal, setShowModal] = React.useState(false);
    const [editingData, setEditingData] = React.useState<IProject | null>(null);



    const mockProjects = [
        {
            id: 0,
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
        {
            id: 1,
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
        {
            id: 2,
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
        {
            id: 3,
            created_at: 'December 10, 2020',
            title: 'Task Management System',
            total_task: 10,
            completed_task: 3,
            users: ['Obaid Aqeel', 'Shayaan Sohail', 'Ali Rashid', 'Haisam Arshad']
        },
    ]

    const [data, setData] = React.useState(mockProjects)

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);


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


    const openModal = () => setShowModal(true);

    const openEditModal = (id: number) => {
        setShowModal(true);
        const foundItem: IProject | undefined = data.find(item => item.id === id);
        const found: IProject | null = foundItem ? foundItem : null;
        setEditingData(found);
    }

    const closeModal = () => {
        setShowModal(false);
        setEditingData(null);
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
