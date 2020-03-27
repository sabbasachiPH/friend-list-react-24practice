import React from "react";
import "./SingleFriend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const SingleFriend = props => {
  //console.log(props.friend);
  const { fistName, lastName, profile_pic, basicSalary, mobile } = props.friend;

  return (
    <div className="friendCard">
      <img src={profile_pic} alt="" />
      <h2>
        {fistName} {lastName}
      </h2>
      <div>
        <h4>Mobile: {mobile}</h4>
        <h4>Yearly Income : ${basicSalary}</h4>
      </div>
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => props.handleAddFriend(props.friend)}
        >
          <FontAwesomeIcon icon={faUserPlus} /> Add Friend
        </button>
        <button
          className="btn btn-info m-2"
          onClick={() => props.handleFriendDetail(props.friend)}
        >
          <FontAwesomeIcon icon={faInfoCircle} /> See Detail
        </button>
      </div>
    </div>
  );
};

export default SingleFriend;
