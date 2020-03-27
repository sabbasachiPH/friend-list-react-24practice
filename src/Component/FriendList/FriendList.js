import React from "react";
import "./FriendList.css";

const FriendList = props => {
  const List = props.friendList;
  //console.log(props);

  const totalIncome = List.reduce(
    (totalIncome, fr) => totalIncome + fr.basicSalary,
    0
  );

  return (
    <div>
      <div>
        <h4>
          <b>Total Friend = {List.length}</b>
        </h4>
        <b>Friend's Yearly Income Grand Total = ${totalIncome}</b>
      </div>
      <div className="frnd d-flex justify-content-between">
        <img src="https://joeschmoe.io/api/v1/${4}" alt="" ></img>
        <p>Friens Name</p>
      </div>
    </div>
  );
};

export default FriendList;
