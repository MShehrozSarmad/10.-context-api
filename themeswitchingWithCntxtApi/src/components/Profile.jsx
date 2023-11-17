import React, { useContext } from "react";
import userContext from "../contexts/useContext";

const Profile = () => {
  const { user } = useContext(userContext);
  if (!user) return <div>please login</div>;
  return <div>Welcome {user.usrnm}</div>
};

export default Profile;
