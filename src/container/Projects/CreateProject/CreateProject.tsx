import React from "react";
import { Form } from "react-bootstrap";
import CustomForm from "../../../component/CustomForm/CustomForm";
import CustomButton from "../../../component/Button/Button";
import { useFormSubmission } from "../../../hooks/useFormSubmission";
import { users } from "../../../utils/utils";
import { IProjectForm } from "../../../interface";
import Loader from "../../../component/Loader/Loader";

export interface ICreate<T> {
  onSubmit: (formData: T) => void;
  loader: boolean;
}

const CreateProject: React.FC<ICreate<IProjectForm>> = ({ onSubmit, loader }) => {
  const projectInitialValues: IProjectForm = {
    title: "",
    deadline: new Date().toISOString().substr(0, 10),
    users: []
  };

  const fields = {
    title: "Title",
    deadline: "Deadline",
    users: "users"
  };

  const { formData, handleChange, handleSubmit, setFormData } = useFormSubmission<IProjectForm>(
    projectInitialValues,
    onSubmit
  );

  return (
    <Form onSubmit={handleSubmit}>
      <CustomForm
        setFormData={setFormData}
        formData={formData}
        handleChange={handleChange}
        users={users}
        fields={fields}
      />
      {
        !loader ? (
          <CustomButton className={"mt-4"}>Submit</CustomButton>
        ) : <Loader />
      }
    </Form>
  );
};

export default CreateProject;
