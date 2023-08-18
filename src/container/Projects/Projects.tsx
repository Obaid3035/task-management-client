import React from "react";
import { Container, Row } from "react-bootstrap";
import CreateProject from "./CreateProject/CreateProject";
import CustomModal from "../../component/CustomModal/CustomModal";
import { IProjectData, IProjectForm } from "../../interface";
import ProjectList from "./ProjectList";
import Header from "../../component/Header/Header";
import { getAllProjects } from "../../service/api/project";
import toast from "react-hot-toast";
import Loader from "../../component/Loader/Loader";

const Projects = () => {
  const [projects, setProjects] = React.useState<IProjectData[]>([]);
  const [loader, setLoader] = React.useState(false);
  const [formLoader, setFormLoader] = React.useState(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoader(true);
    getAllProjects()
      .then((res) => {
        setProjects(res.data);
        setLoader(false);
      })
      .catch((e) => {
        toast.error(e.response.data.message,
          {
            style: {
              borderRadius: "10px",
              background: "#000000",
              color: "#fff"
            }
          });
        setLoader(false);
      });
  }, []);


  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
  };

  const onSubmitHandler = async (formInput: IProjectForm) => {

  };

  if (loader) {
    return <Loader />;
  }


  return (
    <Container className={"mt-5"}>
      <CustomModal showModal={showModal} title={"Create Project"} handleClose={handleClose}>
        <CreateProject
          loader={formLoader}
          onSubmit={onSubmitHandler} />
      </CustomModal>
      <Header handleShow={handleShow} title={"My Projects"} />
      <Row className={"justify-content-center align-items-center"}>
        {
          !loader ? (
            projects.length > 0 ? (
              <ProjectList projects={projects} />
            ) : (
              <div>No Projects Found</div>
            )
          ) : <Loader />
        }

      </Row>
    </Container>
  );
};

export default Projects;
