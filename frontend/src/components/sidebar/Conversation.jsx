import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 
        ${isSelected ? "bg-base-300" : ""} hover:bg-base-300`}
      onClick={() => setSelectedConversation(conversation)}
    >
      {/* Avatar */}
      <div className="avatar online">
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

          {/* Time or status */}
          <span className="text-xs text-base-content/60">2m</span>
        </div>

        {/* Last message */}
        <p className="text-sm text-base-content/70 truncate">
          Hi, how are you?
        </p>
      </div>
    </div>
  );
};

export default Conversation;
