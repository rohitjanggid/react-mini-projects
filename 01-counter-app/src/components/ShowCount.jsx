import { useState } from "react";

const ShowCount = ({ value }) => {
  return <p className="card-text">Count is: {value.total}</p>;
};

export default ShowCount;
