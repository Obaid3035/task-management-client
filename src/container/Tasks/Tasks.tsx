import React from "react";
import { Container, Row } from "react-bootstrap";
import { ITask } from "./Task/Task";
import { mockTasks } from "../../utils/utils";
import CustomModal from "../../component/CustomModal/CustomModal";
import CreateTask from "./CreateTask/CreateTask";
import { ITaskForm } from "../../interface";
import TaskList from "./TaskList";
import Header from "../../component/Header/Header";


const Tasks = () => {

  const [tasks, setTasks] = React.useState<ITask[]>(mockTasks);
  const [formLoader, setFormLoader] = React.useState(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
  };

  const onSubmitHandler = (formInput: ITaskForm) => {

  };


  return (
    <Container className={"mt-5 projects_container"}>
      <CustomModal showModal={showModal} title={"Create Task"} handleClose={handleClose}>
        <CreateTask
          loader={formLoader}
          onSubmit={onSubmitHandler} />
      </CustomModal>
      <Header handleShow={handleShow} title={"My Task"} />
      <Row className={"justify-content-center"}>
        {mockTasks.length > 0 ? (
          <TaskList tasks={mockTasks} />
        ) : (
          <div>No Tasks Found</div>
        )}
      </Row>
    </Container>
  );
};

export default Tasks;
