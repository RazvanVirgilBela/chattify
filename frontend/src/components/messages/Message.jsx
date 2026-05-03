import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const formatedTime = extractTime(message.createdAt);

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleStyles = fromMe
    ? "bg-primary text-primary-content"
    : "bg-base-200 text-base-content";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName} mb-2`}>
      {/* Avatar */}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
          <img src={profilePic} alt="profile" />
        </div>
      </div>

      {/* Bubble */}
      <div
        className={`chat-bubble ${bubbleStyles} shadow-md max-w-xs md:max-w-md break-words ${shakeClass}`}
      >
        {message.message}
      </div>

      {/* Footer */}
      <div className="chat-footer opacity-50 text-xs mt-1 flex items-center gap-1">
        <span>{formatedTime}</span>
        {fromMe && <span>✓✓</span>}
      </div>
    </div>
  );
};

export default Message;
