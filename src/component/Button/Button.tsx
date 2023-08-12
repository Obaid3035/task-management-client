import React, {ReactNode} from 'react';
import {Button} from "react-bootstrap";
import './Button.css';

export interface ICustomButton {
    handleShow?: () => void,
    children: ReactNode,
    className?: string
}

const CustomButton: React.FC<ICustomButton> = ({ handleShow, className }) => {
    return (
        <Button className={"custom_btn " + className} onClick={handleShow}>Create</Button>
    );
};

export default CustomButton;
