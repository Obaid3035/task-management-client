import React from 'react';
import {Container, Row} from "react-bootstrap";
import CreateProject from "./CreateProject/CreateProject";
import {mockProjects} from "../../utils/utils";
import CustomModal from "../../component/CustomModal/CustomModal";
import {IProjectData, IProjectForm} from "../../interface";
import ProjectList from "./ProjectList";
import Header from "../../component/Header/Header";

const Projects = () => {
    const [data, setData] = React.useState<IProjectData[]>(mockProjects);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [editProject, setEditProject] = React.useState<IProjectForm | null>(null);

    const handleShow = () => setShowModal(true);

    const handleClose = () => {
        setShowModal(false);
        setEditProject(null);
    }

    const onSubmitHandler = (formInput: IProjectForm) => {
        if (editProject) {
            // Edit
            setEditProject(null);
        } else {
            // Create
        }
    }

    const openEditModal = (id: number) => {
        setShowModal(true);
        const found: IProjectData = data.find(item => item.id === id)!
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
                    onSubmit={onSubmitHandler}/>
            </CustomModal>
            <Header handleShow={handleShow} title={'My Projects'}/>
            <Row className={'justify-content-center align-items-center'}>
                {mockProjects.length > 0 ? (
                    <ProjectList projects={mockProjects} openEditModal={openEditModal}/>
                ) : (
                    <div>No Projects Found</div>
                )}

            </Row>
        </Container>
    );
};

export default Projects;
