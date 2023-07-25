import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();
  console.log(params);
  return <div>UserPage</div>;
};

export default UserPage;
