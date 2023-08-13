import React from 'react';
import {Form} from 'react-bootstrap';
import CustomForm from "../../../component/CustomForm/CustomForm";
import CustomButton from '../../../component/Button/Button';
import {useFormSubmission} from '../../../hooks/useFormSubmission';
import {users} from "../../../utils/utils";
import {ICreate} from "../../Projects/CreateProject/CreateProject";
import {ITaskForm} from "../Task/Task"; // Import the custom hook



const CreateTask: React.FC<ICreate<ITaskForm>> = ({onSubmit, onCloseModal, editData}) => {
    const taskInitialValues: ITaskForm = {
        title: '',
        description: '',
        status: '',
        priority: '',
        deadline: '',
        users: [],
    };

    const fields = {
        title: 'Title',
        deadline: 'Deadline',
        description: 'Description',
        status: 'Status',
        priority: 'Priority',
    };

    const {formData, handleChange, handleSubmit, setFormData} = useFormSubmission<ITaskForm>(
        editData || taskInitialValues,
        onSubmit,
        onCloseModal
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
            <CustomButton className={'mt-4'}>Submit</CustomButton>
        </Form>
    );
};

export default CreateTask;
