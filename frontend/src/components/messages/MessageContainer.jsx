import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="flex flex-col flex-1">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-b border-base-300">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="user"
                  />
                </div>
              </div>

              {/* Name */}
              <div>
                <p className="text-sm text-base-content/60">To:</p>
                <p className="font-semibold text-base-content">John Doe</p>
              </div>
            </div>
          </div>

          {/* Messages area */}
          <Messages />

          {/* Input area */}
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-6 text-center sm:text-lg md:text-xl text-base-content/70 font-semibold flex flex-col items-center gap-3">
        <p className="text-base sm:text-lg md:text-xl font-bold text-base-content">
          Welcome <span className="text-primary">John Doe</span>
        </p>

        <p className="text-sm sm:text-base md:text-lg text-base-content/60">
          Select a chat to start messaging
        </p>

        <div className="p-4 rounded-full bg-base-200 mt-2">
          <TiMessages className="text-4xl sm:text-5xl md:text-6xl text-primary" />
        </div>
      </div>
    </div>
  );
};
export default MessageContainer;
