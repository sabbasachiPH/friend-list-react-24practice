import React, { useState } from "react";
import "./AllFriend.css";
import fakeData from "../../dummyData/fakeData";
import SingleFriend from "../SingleFriend/SingleFriend";
import FriendList from "../FriendList/FriendList";

const TenFriend = (props) => {
  const tenFriend = fakeData.slice(0, 15);
  const [friends, setFriends] = useState(tenFriend);

  const [friendList, setFriendList] = useState([]);

  const handleAddFriend = (friend) => {
    friend.isFriend = true;
    const newFriendList = [...friendList, friend];
    setFriendList(newFriendList);
  };

  const handleFriendDetail = (friend) => {
    //console.log("See Friend's Detail Button Clicked.", friend);
  };
  const removeFriend = (friend) => {
    const newlist = friendList.filter((ft) => ft.id !== friend.id);
    setFriendList(newlist);
    friend.isFriend = false;
  };

  const showCaseFriend = friends.map((fr) => (
    <SingleFriend
      key={fr.id}
      handleAddFriend={handleAddFriend}
      removeFriend={removeFriend}
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
        <FriendList
          removeFriend={removeFriend}
          friendList={friendList}
        ></FriendList>
      </div>
    </div>
  );
};

export default TenFriend;
