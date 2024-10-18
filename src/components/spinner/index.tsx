import React from "react";
import ReactLoading from "react-loading";
import "./spinner.css";

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <ReactLoading
        type="spinningBubbles"
        color="green"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Spinner;
