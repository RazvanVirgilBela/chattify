import React from "react";
import { LuSend } from "react-icons/lu";

const MessageInput = () => {
  return (
    <div className="p-3 border-t border-base-300 bg-base-100">
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary btn-square">
          <LuSend className="w-6 h-6 cursor-pointer" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
