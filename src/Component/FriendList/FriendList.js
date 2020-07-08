import React from "react";
import "./FriendList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

const FriendList = (props) => {
  const uniqueList = [...new Set(props.friendList)];
  // console.log(props);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  });

  const totalIncome = formatter.format(
    uniqueList.reduce((totalIncome, fr) => totalIncome + fr.basicSalary, 0)
  );
  const showFriendList = uniqueList.map((listedfriend) => (
    <div
      key={listedfriend.id}
      className="frnd d-flex justify-content-between align-items-center"
    >
      <span>
        <img
          className="frndImg"
          src={listedfriend.profile_pic}
          alt=" firendsPhoto"
        />
        {listedfriend.fistName} {listedfriend.lastName}
      </span>
      <FontAwesomeIcon
        icon={faUserMinus}
        onClick={() => props.removeFriend(listedfriend)}
      />
    </div>
  ));

  return (
    <>
      <div className="text-success text-center">
        <h4>
          <b>Total Friend = {uniqueList.length}</b>
        </h4>
        <b>Friend's Yearly Income Grand Total = {totalIncome}</b>
      </div>
      <h2 className="text-primary text-center">Friends In list</h2>
      {showFriendList}
    </>
  );
};

export default FriendList;
