import React, {ReactNode} from 'react';
import {Button, Modal} from "react-bootstrap";
import './CustomModal.css';

export interface ICustomModal {
    showModal: boolean,
    title: string,
    handleClose: () => void,
    children: ReactNode
}

const CustomModal: React.FC<ICustomModal> = ({ showModal, handleClose, title, children}) => {
    return (
        <Modal show={showModal}>
            <Modal.Header>
                <Modal.Title>{ title }</Modal.Title>
                <Button className={'bg-black'} onClick={handleClose}>&times;</Button>
            </Modal.Header>
            <Modal.Body>
                { children }
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;
