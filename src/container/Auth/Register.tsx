import React from 'react';
import {IAuth} from "../../interface";
import {useFormSubmission} from "../../hooks/useFormSubmission";
import CustomForm from "../../component/CustomForm/CustomForm";
import { users } from "../../utils/utils";
import CustomButton from "../../component/Button/Button";
import {Col, Container, Form, Row} from "react-bootstrap";
import './Auth.css';
import { useNavigate } from "react-router-dom";
import { register } from "../../service/api/auth";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";


const Register = () => {
    const navigation = useNavigate();

    const { onRegisterHandler, isAuthenticated } = useAuth();

    React.useEffect(() => {
        if (isAuthenticated){
            navigation("/")
        }
    }, []);


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

    const onSubmitHandler = async (formInput: IAuth) => {
       try {
           await onRegisterHandler(formInput)
           navigation('/')
           toast.success('Register Successfully')

       } catch (e: any) {
           toast.error(e.response.data.message,
             {
                 style: {
                     borderRadius: '10px',
                     background: '#000000',
                     color: '#fff',
                 },
             })
       }
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
                        <p className={'text-muted mt-3 member'}
                           onClick={() => navigation('/login')}
                        >Already a member ?</p>
                        <CustomButton className={'mt-2'}>Register</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
