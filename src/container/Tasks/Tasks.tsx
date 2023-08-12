import React from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Task from "./Task/Task";
import {mockTasks} from "../../utils/utils";

const Tasks = () => {
    return (
        <Container className={'mt-5 projects_container'}>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h4 className={'fw-bold'}>My Tasks</h4>
                <Button className={'bg-black'}>Create</Button>
            </div>
            <Row className={'justify-content-center '}>
                {
                    mockTasks.map((task) => (
                        <Col md={3} className={'task mx-2 my-3'}>
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
