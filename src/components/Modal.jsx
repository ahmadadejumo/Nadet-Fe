import React from "react";

const Modal = ({ showModal }) => {
  return (
    <div
      onClick={showModal}
      className="fixed left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white font-Lato px-5"
      >
        <p className="text-lg font-semibold pt-7">Lecture name</p>
        <input
          type="text"
          className="border pl-3 w-[250px] h-[40px] rounded outline-bcolor"
        />
        <div className="flex justify-between pt-3 pb-5">
          <button className="bg-bcolor h-[40px] w-[100px] rounded font-semibold">
            Add
          </button>
          <button
            onClick={showModal}
            className="bg-gray-400 h-[40px] w-[100px] rounded font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
