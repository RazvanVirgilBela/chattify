import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <div className="p-3 border-t border-base-300 bg-base-100">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-square">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <LuSend className="w-6 h-6 cursor-pointer" />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
