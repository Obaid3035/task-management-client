import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './CreateProject.css';
import {IFormData} from "../Projects";



interface ICreateProject {
    onSubmit: (formData: IFormData) => void;
    onCloseModal: () => void;
    initialValues?: IFormData;
    editingData: IFormData | null;
}

const CreateProject: React.FC<ICreateProject> = ({ onSubmit, onCloseModal, editingData }) => {
    const [formData, setFormData] = useState(
        editingData ? {
            title: editingData.title,
        } : {
            title: '',
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ title: '' });
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
