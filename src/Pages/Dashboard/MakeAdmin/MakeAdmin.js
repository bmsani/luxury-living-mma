import React from "react";

const MakeAdmin = () => {
  return (
    <div className="card w-11/12 h-56 bg-base-100 shadow-xl">
      <div className="flex p-8">
        <input
          type="text"
          placeholder="Email"
          class="input input-bordered w-full max-w-xs"
        />
        <button class="btn ml-2">Submit</button>
      </div>
    </div>
  );
};

export default MakeAdmin;
