import React from 'react';
import {Form} from 'react-bootstrap';
import CustomForm from "../../../component/CustomForm/CustomForm";
import CustomButton from '../../../component/Button/Button';
import {useFormSubmission} from '../../../hooks/useFormSubmission';
import {users} from "../../../utils/utils";
import {IProjectForm} from "../../../interface";

export interface ICreate<T> {
    onSubmit: (formData: T) => void;
    editData: T | null;
}

const CreateProject: React.FC<ICreate<IProjectForm>> = ({onSubmit, editData}) => {
    const projectInitialValues: IProjectForm = {
        title: '',
        deadline: '',
        users: [],
    };

    const fields = {
        title: 'Title',
        deadline: 'Deadline',
        users: 'users'
    };

    const {formData, handleChange, handleSubmit, setFormData} = useFormSubmission<IProjectForm>(
        editData || projectInitialValues,
        onSubmit,
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

export default CreateProject;
