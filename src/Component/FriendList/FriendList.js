import React from "react";
import "./FriendList.css";

const FriendList = (props) => {
  const list = props.friendList;
  console.log(props);

  const totalIncome = list.reduce(
    (totalIncome, fr) => totalIncome + fr.basicSalary,
    0
  );
  const showFriendList = list.map((listedfriend) => (
    <>
      <div className="frnd d-flex justify-content-evenly align-items-center">
        <img
          className="frndImg"
          src={listedfriend.profile_pic}
          alt=" firendsPhoto"
        />
        {listedfriend.fistName} {listedfriend.lastName}
      </div>
    </>
  ));

  return (
    <>
      <div className="text-success text-center">
        <h4>
          <b>Total Friend = {list.length}</b>
        </h4>
        <b>Friend's Yearly Income Grand Total = ${totalIncome}</b>
      </div>
      <h2 className="text-primary text-center">Friends In list</h2>
      {showFriendList}
    </>
  );
};

export default FriendList;
