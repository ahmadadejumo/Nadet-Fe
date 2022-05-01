import React, { useState } from "react";
import wastebin from "../../../../assets/images/wastebin.svg";
import { useNavigate } from "react-router-dom";
import pen from "../../../../assets/images/pen.svg";

const AddLecture = ({ lectureName, id, onChange }) => {
  const [edit, setEdit] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <div className="flex items-center justify-between">
      {!edit ? (
        <div className="flex items-center space-x-[10px] lg:cursor-pointer">
          <p className="text-base font-bold">{lectureName}</p>
          <img
            onClick={() => setEdit(!edit)}
            src={pen}
            alt="icon"
            className="w-[18px] h-[18px]"
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border border-black outline-none border-t-0 border-x-0 text-base font-bold w-[90px]"
            defaultValue={lectureName}
            onChange={onChange}
          />
        </form>
      )}

      <div className="flex items-center space-x-[20px]">
        <button
          onClick={() =>
            navigation(`/dashboard/upload-course-lecture/${id}/${lectureName}`)
          }
          className="h-[35px] w-[64px] bg-bcolor rounded text-base font-bold"
        >
          Edit
        </button>
        <img
          src={wastebin}
          alt="icon"
          className="h-[24px] w-[20px] lg:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AddLecture;
