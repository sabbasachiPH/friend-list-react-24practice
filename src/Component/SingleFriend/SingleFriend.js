import React from "react";
import "./SingleFriend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faInfoCircle,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";

const SingleFriend = (props) => {
  // console.log(props);
  const {
    fistName,
    lastName,
    profile_pic,
    basicSalary,
    id,
    mobile,
    isFriend,
  } = props.friend;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  });
  const formatBasicSalary = formatter.format(basicSalary);

  return (
    <div className="friendCard">
      <img src={profile_pic} alt="" />
      <h2>
        {fistName} {lastName}
      </h2>
      <div>
        <h4>Mobile: {mobile}</h4>
        <h4>Income : {formatBasicSalary}</h4>
      </div>
      <div>
        {isFriend && (
          <button
            className="btn btn-primary m-2 addBtn"
            onClick={() => props.removeFriend(props.friend)}
          >
            <FontAwesomeIcon icon={faUserMinus} /> Unfriend
          </button>
        )}
        {!isFriend && (
          <button
            className="btn btn-primary m-2 addBtn"
            onClick={() => props.handleAddFriend(props.friend)}
          >
            <FontAwesomeIcon icon={faUserPlus} /> Add Friend
          </button>
        )}
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
