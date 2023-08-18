import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className={'d-flex justify-content-center align-items-center mt-4'}>
      <Spinner/>
    </div>
  );
};

export default Loader;
