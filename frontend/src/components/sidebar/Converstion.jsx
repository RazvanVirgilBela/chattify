import React from "react";

const Converstion = () => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-base-300">
      {/* Avatar */}
      <div className="avatar online">
        <div className="w-12 rounded-full ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="user avatar"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex justify-between items-center">
          {/* Name */}
          <p className="font-semibold text-base-content truncate">John Doe</p>

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

export default Converstion;
