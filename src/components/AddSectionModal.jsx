import React, { useContext } from "react";
import DataContext from "../Context/DataContext";
import { motion } from "framer-motion";
import axios from "../Api/axios";

const AddSectionModal = ({ showModal, onClick }) => {
  const { sectionName, setSectionName } = useContext(DataContext);

  const handlSubmit = async (e) => {
    e.preventDefault();
    setSectionName("");
    onClick();
    showModal();
    try {
      await axios.post(
        "https://nadetapi.herokuapp.com/ps/section-create/",
        {
          name: sectionName,
          course: 199,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          withCredentials: false,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      onClick={showModal}
      onSubmit={handlSubmit}
      className="fixed left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
    >
      <motion.form
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white font-Lato px-5"
      >
        <p className="text-lg font-semibold pt-7">Section name</p>
        <input
          type="text"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          placeholder="Section 1"
          className="border pl-3 w-[250px] h-[40px] rounded outline-bcolor"
        />
        <div className="flex justify-between pt-3 pb-5">
          <button
            type="submit"
            disabled={!sectionName}
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
      </motion.form>
    </div>
  );
};

export default AddSectionModal;
