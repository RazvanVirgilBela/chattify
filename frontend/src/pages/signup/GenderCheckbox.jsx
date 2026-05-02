import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex mt-3 gap-6">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;