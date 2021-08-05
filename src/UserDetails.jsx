import React from 'react';
import "./style.css";

const UserDetails = ({ userInfo }) => {
  const {id, avatar, first_name, last_name, email} = userInfo;
  return (
    <div id="mainDiv">
      <div id="details">{id}</div>
      <div id="details"><img id="image" src={userInfo.avatar}  /></div>
      <div id="details">{userInfo.first_name} </div>
      <div id="details">{last_name}</div>
      <div id="details">{email}</div>

    </div>
  );
};

export default UserDetails;
