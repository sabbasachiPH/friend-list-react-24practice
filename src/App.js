import React from "react";
import "./App.css";
import AllFriend from "./Component/AllFriend/AllFriend";

function App() {
  return (
    <div className="App">
      <h1 className="text-primary text-center">People You May Know</h1>
      <AllFriend></AllFriend>
    </div>
  );
}

export default App;

// const current = document.querySelector("#current");
// const imgs = document.querySelectorAll(".imgs img");
// //console.log("problem ", imgs, current);
// imgs.forEach(img => {
//   img.addEventListener("click", e => (current.src = e.target.src));
//   console.log(
//     img.addEventListener("click", e => (current.src = e.target.src))
//   );
// });
