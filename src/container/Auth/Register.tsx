import React from 'react';
import {IAuth} from "../../interface";
import {useFormSubmission} from "../../hooks/useFormSubmission";
import CustomForm from "../../component/CustomForm/CustomForm";
import {users} from "../../utils/utils";
import CustomButton from "../../component/Button/Button";
import {Col, Container, Form, Row} from "react-bootstrap";
import './Auth.css';


const Register = () => {

    const authInitialValues: IAuth = {
        email: '',
        name: '',
        password: ''
    };

    const fields = {
        name: 'Name',
        email: 'Email',
        password: 'Password',
    };

    const onSubmitHandler = (formInput: IAuth) => {

    }

    const {formData, handleChange, handleSubmit, setFormData} = useFormSubmission<IAuth>(
        authInitialValues,
        onSubmitHandler,
    );

    return (
        <Container className={'auth_container'}>
            <Row className={'justify-content-center align-items-center h-100'}>
                <Col md={3}>
                    <Form onSubmit={handleSubmit} className={'auth_form'}>
                        <CustomForm
                            setFormData={setFormData}
                            formData={formData}
                            handleChange={handleChange}
                            users={users}
                            fields={fields}
                        />
                        <CustomButton className={'mt-4'}>Submit</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
