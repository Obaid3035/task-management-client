import React from "react";
import CustomButton from "../Button/Button";
import { FiLogOut } from 'react-icons/fi';
import { logout } from "../../service/api/auth";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";

interface IHeader {
  handleShow: () => void;
  title: string
}

const Header: React.FC<IHeader> = ({ handleShow, title }) => {
  const navigation = useNavigate();
  const { loader, setLoader, setIsAuthenticated } = useAuth();
  const onLogoutHandler = async () => {
    setLoader(true)
    await logout();
    setIsAuthenticated(false)
    setLoader(false)
    toast.success('Successfully logged out')
    navigation('/login')
  }

  if (loader) {
    return (
      <div className={'d-flex justify-content-center align-items-center vh-100'}>
        <Spinner/>
      </div>
    )
  }

  return (
    <div className={'d-flex align-items-center justify-content-between'}>
      <h4 className={'fw-bold'}>{ title }</h4>
      <div className="d-flex justify-content-between align-items-center">
        <CustomButton handleShow={handleShow}>Create</CustomButton>
        <FiLogOut
          className={'mx-5'}
          cursor={'pointer'}
          onClick={() => onLogoutHandler()}
        />
      </div>
    </div>
  );
};

export default Header;
