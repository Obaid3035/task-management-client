import React from 'react';
import {Form} from 'react-bootstrap';
import Select from 'react-select';
import {ISelect} from "../../interface";

interface ICustomForm {
    formData: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    users: ISelect[];
    status?: ISelect[];
    priority?: ISelect[];
    fields: {
        title: string;
        deadline: string;
        description?: string;
        status?: string,
        priority?: string
    };
}

const CustomForm: React.FC<ICustomForm> = (
    {
        formData,
        handleChange,
        setFormData,
        users,
        status,
        priority,
        fields,
    }) => {

    return (
        <React.Fragment>
            <Form.Group>
                <Form.Label>{fields.title}</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </Form.Group>
            {fields.description && (
                <Form.Group className={'mt-3'}>
                    <Form.Label>{fields.description}</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>
            )}
            <Form.Group className={'mt-3'}>
                <Form.Label>{fields.deadline}</Form.Label>
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
                    onChange={(option) => {
                        setFormData({
                            ...formData,
                            users: option,
                        });
                    }}
                    value={formData?.users}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </Form.Group>
            {fields.status && (
                <Form.Group className={'mt-3'}>
                    <Form.Label>{fields.status }</Form.Label>
                    <Select
                        name="colors"
                        options={status}
                        onChange={(option: any) => {
                            setFormData({
                                ...formData,
                                status: option,
                            });
                        }}
                        value={formData?.status}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </Form.Group>
            )}
            {fields.priority && (
                <Form.Group className={'mt-3'}>
                    <Form.Label>{fields.priority}</Form.Label>
                    <Select
                        name="colors"
                        options={priority}
                        onChange={(option) => {
                            setFormData({
                                ...formData,
                                priority: option,
                            });
                        }}
                        value={formData?.priority}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </Form.Group>
            )}
        </React.Fragment>
    );
};

export default CustomForm;
