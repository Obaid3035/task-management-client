import React, { useState } from "react";
import { ILogin } from "../../interface";
import { useFormSubmission } from "../../hooks/useFormSubmission";
import CustomForm from "../../component/CustomForm/CustomForm";
import CustomButton from "../../component/Button/Button";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/authContext";


const Login = () => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { onLoginHandler } = useAuth();
  const loginInitialValues: ILogin = {
    email: "",
    password: ""
  };

  const fields = {
    email: "Email",
    password: "Password"
  };

  const onSubmitHandler = async (formInput: ILogin) => {
    setIsLoading(true);
    try {
      await onLoginHandler(formInput);
      navigation("/");
      toast.success("Successfully Logged In");
    } catch (e: any) {
      toast.error(e.response.data.message,
        {
          style: {
            borderRadius: "10px",
            background: "#000000",
            color: "#fff"
          }
        });
    } finally {
      setIsLoading(false);
    }
  };

  const { formData, handleChange, handleSubmit, setFormData } = useFormSubmission<ILogin>(
    loginInitialValues,
    onSubmitHandler
  );


  return (
    <Container className={"auth_container"}>
      <Row className={"justify-content-center align-items-center h-100"}>
        <Col md={3}>
          <Form onSubmit={handleSubmit} className={"auth_form"}>
            <CustomForm
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
              fields={fields}
            />
            <p className={"text-muted mt-3 member"}
               onClick={() => navigation("/register")}
            >Not a member ?</p>
            {
              isLoading ? (
                <Spinner />
              ) : <CustomButton type={"submit"} className={"mt-2"}>Login</CustomButton>
            }
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
