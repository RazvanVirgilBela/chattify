import React from "react";

const MessageSkeleton = () => {
  const skeletons = Array.from({ length: 2 });

  return (
    <>
      {skeletons.map((_, i) => {
        const isOwn = i % 2 === 0; // alternate

        return (
          <div key={i} className={`chat ${isOwn ? "chat-end" : "chat-start"}`}>
            {/* Avatar */}
            <div className="chat-image avatar">
              <div className="w-10 rounded-full skeleton"></div>
            </div>

            {/* Bubble */}
            <div className="chat-bubble bg-base-300">
              <div className="skeleton h-4 w-32 mb-2"></div>
              <div className="skeleton h-4 w-24"></div>
            </div>

            {/* Footer */}
            <div className="chat-footer opacity-50 flex gap-1 items-center">
              <div className="skeleton h-3 w-10"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MessageSkeleton;
