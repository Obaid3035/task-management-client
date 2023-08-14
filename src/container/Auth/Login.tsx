import React from 'react';
import {IAuth, ILogin} from "../../interface";
import {useFormSubmission} from "../../hooks/useFormSubmission";
import CustomForm from "../../component/CustomForm/CustomForm";
import {users} from "../../utils/utils";
import CustomButton from "../../component/Button/Button";
import {Col, Container, Form, Row} from "react-bootstrap";
import './Auth.css';



const Login = () => {
    const loginInitialValues: ILogin = {
        email: '',
        password: ''
    };

    const fields = {
        email: 'Email',
        password: 'Password',
    };

    const onSubmitHandler = (formInput: ILogin) => {
        console.log(formInput)
    }

    const {formData, handleChange, handleSubmit, setFormData} = useFormSubmission<ILogin>(
        loginInitialValues,
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
                        <CustomButton type={'submit'} className={'mt-4'}>Submit</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
