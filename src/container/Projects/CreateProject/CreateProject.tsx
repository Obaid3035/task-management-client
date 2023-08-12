import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import './CreateProject.css';
import {ProjectForm} from "../Projects";


interface ICreateProject {
    onSubmit: (formData: ProjectForm) => void;
    onCloseModal: () => void;
    initialValues?: ProjectForm;
    editData: ProjectForm | null;
}

const CreateProject: React.FC<ICreateProject> = ({onSubmit, onCloseModal, editData}) => {
    const initialValues = {
        title: '',
        deadline: ''
    }
    const [formData, setFormData] = useState<ProjectForm>(
        editData ? {
            title: editData.title,
            deadline: editData.deadline,
        } : initialValues
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData(initialValues);
        onCloseModal()
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button className={'mt-4'} type="submit">Submit</Button>
        </Form>

    );
};

export default CreateProject;
