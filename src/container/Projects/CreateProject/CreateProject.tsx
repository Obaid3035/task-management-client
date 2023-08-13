import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import Select from 'react-select';
import './CreateProject.css';
import {ProjectForm} from "../Projects";
import CustomButton from "../../../component/Button/Button";


interface ICreateProject {
    onSubmit: (formData: ProjectForm) => void;
    onCloseModal: () => void;
    initialValues?: ProjectForm;
    editData: ProjectForm | null;
}

const CreateProject: React.FC<ICreateProject> = ({onSubmit, onCloseModal, editData}) => {
    const initialValues = {
        title: '',
        deadline: '',
        users: []
    }
    const [formData, setFormData] = useState<ProjectForm>(
        editData ? {
            title: editData.title,
            deadline: editData.deadline,
            users: editData.users

        } : initialValues
    );

    console.log(formData)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        console.log(name, value)
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

    const users = [
        { value: 1, label: 'Obaid Aqeel' },
        { value: 2, label: 'Ali Rashid' },
    ];

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className={'mt-3'}>
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                    type="date"
                    name="deadline"
                    value={formData.deadline || ''}
                    onChange={handleChange}
                    placeholder="Select a date"
                />
            </Form.Group>
            <Form.Group className={'mt-3'}>
                <Form.Label>Assign Users</Form.Label>
                <Select
                    isMulti
                    name="colors"
                    options={users}
                    onChange={(option: any) => {
                        console.log(option)
                        setFormData({
                            ...formData,
                            users: option
                        })
                    }}
                    value={formData?.users}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </Form.Group>
            <CustomButton className={'mt-4'}>Submit</CustomButton>
        </Form>

    );
};

export default CreateProject;
