import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import { Avatar } from "@material-ui/core";

export default function Sidebar({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = Avatar;

//   useEffect(() => {
//     const friendId = conversation.members.find((m) => m !== currentUser._id);

//     const getUser = async () => {
//       try {
//         const res = await axios("/users?userId=" + friendId);
//         setUser(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getUser();
//   }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={PF}
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}