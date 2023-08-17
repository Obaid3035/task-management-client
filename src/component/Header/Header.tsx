import React from "react";
import CustomButton from "../Button/Button";
import { FiLogOut } from 'react-icons/fi';
import { logout } from "../../service/api/auth";
import { useNavigate } from "react-router-dom";

interface IHeader {
  handleShow: () => void;
  title: string
}

const Header: React.FC<IHeader> = ({ handleShow, title }) => {
  const navigation = useNavigate()
  const onLogoutHandler = async () => {
    await logout();
    navigation('/login', {
      replace: true,
    })
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
