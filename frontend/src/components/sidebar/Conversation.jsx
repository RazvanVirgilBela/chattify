import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 
        ${isSelected ? "bg-base-300" : ""} hover:bg-base-300`}
      onClick={() => setSelectedConversation(conversation)}
    >
      {/* Avatar */}
      <div className={`avatar ${isOnline ? "online" : "offline"}`}>
        <div className="w-12 rounded-full ">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex justify-between items-center">
          {/* Name */}
          <p className="font-semibold text-base-content truncate">
            {conversation.fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
