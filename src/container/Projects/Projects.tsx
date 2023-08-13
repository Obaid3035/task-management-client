import React from 'react';
import {Container, Row} from "react-bootstrap";
import CreateProject from "./CreateProject/CreateProject";
import {mockProjects} from "../../utils/utils";
import CustomModal from "../../component/CustomModal/CustomModal";
import CustomButton from "../../component/Button/Button";
import {IProjectData, IProjectForm} from "../../interface";
import ProjectList from "./ProjectList";

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
                    onCloseModal={handleClose}
                    onSubmit={onSubmitHandler}/>
            </CustomModal>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h4 className={'fw-bold'}>My Projects</h4>
                <CustomButton handleShow={handleShow}>Create</CustomButton>
            </div>
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
