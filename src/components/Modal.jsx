import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

const Modal = ({ showModal, onClick }) => {
  const { lectureName, setLectureName } = useContext(DataContext);

  const handlSubmit = (e) => {
    e.preventDefault();
    setLectureName("");
    onClick();
    showModal();
  };
  return (
    <form
      onClick={showModal}
      onSubmit={handlSubmit}
      className="fixed left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white font-Lato px-5"
      >
        <p className="text-lg font-semibold pt-7">Lecture name</p>
        <input
          type="text"
          value={lectureName}
          onChange={(e) => setLectureName(e.target.value)}
          placeholder="Lecture 1"
          className="border pl-3 w-[250px] h-[40px] rounded outline-bcolor"
        />
        <div className="flex justify-between pt-3 pb-5">
          <button
            type="submit"
            className="bg-bcolor h-[40px] w-[100px] rounded font-semibold"
          >
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
    </form>
  );
};

export default Modal;
