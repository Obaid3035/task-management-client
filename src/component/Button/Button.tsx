import React, {ReactNode} from 'react';
import {Button} from "react-bootstrap";
import './Button.css';

export interface ICustomButton {
    handleShow?: () => void,
    children: ReactNode,
    className?: string,
    type?: 'submit'
}

const CustomButton: React.FC<ICustomButton> = ({ handleShow, className, type, children }) => {
    return (
        <Button type={type} className={"custom_btn " + className} onClick={handleShow}>{children}</Button>
    );
};

export default CustomButton;
