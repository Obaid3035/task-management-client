import React from 'react';
import {Form} from 'react-bootstrap';
import Select from 'react-select';
import {ISelect} from "../../container/Projects/Projects";

interface ICustomForm {
    formData: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    users: ISelect[];
    fields: {
        title: string;
        deadline: string;
        description?: string;
    };
}

const CustomForm: React.FC<ICustomForm> = (
    {
        formData,
        handleChange,
        setFormData,
        users,
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
                    onChange={(option: any) => {
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
        </React.Fragment>
    );
};

export default CustomForm;
