import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Task, {ITask, ITaskForm} from "./Task/Task";
import {mockTasks} from "../../utils/utils";
import CustomButton from "../../component/Button/Button";
import CustomModal from "../../component/CustomModal/CustomModal";
import CreateTask from "./CreateTask/CreateTask";


const Tasks = () => {

    const [tasks, setTasks] = React.useState<ITask[]>(mockTasks);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [editTask, setEditTask] = React.useState<ITaskForm | null>(null);

    const handleShow = () => setShowModal(true);

    const handleClose = () => {
        setShowModal(false);
        setEditTask(null);
    }

    const onSubmitHandler = (formInput: ITaskForm) => {
        if (editTask) {
            // Edit
            setEditTask(null);
        } else {
            // Create
        }
    }

    const openEditModal = (id: number) => {
        setShowModal(true);
        const found: ITask = tasks.find(item => item.id === id)!
        setEditTask({
            title: found.title,
            description: found.description,
            status: found.status,
            priority: found.priority,
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
        <Container className={'mt-5 projects_container'}>
            <CustomModal showModal={showModal} title={'Create Project'} handleClose={handleClose}>
                <CreateTask
                    editData={editTask}
                    onCloseModal={handleClose}
                    onSubmit={onSubmitHandler}/>
            </CustomModal>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h4 className={'fw-bold'}>My Tasks</h4>
                <CustomButton handleShow={handleShow}>Create</CustomButton>
            </div>
            <Row className={'justify-content-center '}>
                {
                    mockTasks.map((task) => (
                        <Col key={task.id} md={3} className={'task mx-2 my-3'}>
                            <Task
                                id={task.id}
                                deadline={task.deadline}
                                title={task.title}
                                description={task.description}
                                users={task.users}
                                status={task.status}
                                priority={task.priority}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Tasks;
