import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {/* Messages */}
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => {
          const isLast = index === messages.length - 1;

          return (
            <div key={message._id} ref={isLast ? lastMessageRef : null}>
              <Message message={message} />
            </div>
          );
        })}

      {/* Skeletons */}
      {loading &&
        Array.from({ length: 3 }).map((_, idx) => (
          <MessageSkeleton key={idx} />
        ))}

      {/* Empty state */}
      {!loading && messages.length === 0 && (
        <p className="text-center text-primary">
          Send a message to start a conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
