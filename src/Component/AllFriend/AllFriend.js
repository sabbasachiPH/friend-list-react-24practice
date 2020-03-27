import React, { useState } from "react";
import "./AllFriend.css";
// import dummyData from "../../dummyData/dummyData";
import fakeData from "../../dummyData/fakeData";
import SingleFriend from "../SingleFriend/SingleFriend";
import FriendList from "../FriendList/FriendList";

const TenFriend = props => {
  const tenFriend = fakeData.slice(0, 15);
  const [friends, setFriends] = useState(tenFriend);
  const [friendList, setFriendList] = useState([]);

  const handleAddFriend = friend => {
    //console.log("Add Friend Button Clicked.", friend);
    const newFriendList = [...friendList, friend];
    setFriendList(newFriendList);
  };

  const handleFriendDetail = friend => {
    //console.log("See Friend's Detail Button Clicked.", friend);
  };

  const showCaseFriend = friends.map(fr => (
    <SingleFriend
      key={fr.id}
      handleAddFriend={handleAddFriend}
      handleFriendDetail={handleFriendDetail}
      friend={fr}
    ></SingleFriend>
  ));

  return (
    <div className="friendContainer">
      <div className="allFriend">
        {showCaseFriend}
        {/* {friends.map(fr => (
          <SingleFriend
            handleAddFriend={handleAddFriend}
            handleFriendDetail={handleFriendDetail}
            friend={fr}
          ></SingleFriend>
        ))} */}
      </div>
      <div className="friendList">
        <FriendList friendList={friendList}></FriendList>
      </div>
    </div>
    // <div className="allFriend d-flex">
    //   <div className="friendContainer">{friend}</div>
    //   <div className="friendlist">
    //     <h4>Friend List will be shown here</h4>
    //     <ul>
    //       <li>one Friend List will be shown here</li>
    //       <li>two</li>
    //       <li>three</li>
    //       <li>four</li>
    //       <li>five</li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default TenFriend;
