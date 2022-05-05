import React, { useState, useContext, useEffect, useId } from "react";
import BackNavigation from "../../../../components/BackNavigation";
import blackPlus from "../../../../assets/images/blackPlus.svg";
import eye from "../../../../assets/images/blackEye.svg";
import AddLectureModal from "../../../../components/AddLectureModal";
import DataContext from "../../../../Context/DataContext";
import AddSection from "./AddSection";
import AddSectionModal from "../../../../components/AddSectionModal";

const AddCourseContent = () => {
  const [show, setShow] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [sections, setSections] = useState([]);
  const { sectionName, setSectionName } = useContext(DataContext);
  const { lectureName, setLectureName } = useContext(DataContext);
  const id = useId();

  const showModal = () => {
    setShow(!show);
  };

  const showModalSection = () => {
    setShowSection(!showSection);
  };

  const handleLecture = () => {
    setLectures([...lectures, { lectureName: lectureName }]);
    localStorage.setItem(
      "lecture",
      JSON.stringify([...lectures, { lectureName: lectureName }])
    );
  };

  //   useEffect(() => {
  //     const data = localStorage.getItem("lectures");
  //     if (data) {
  //       setLectures(JSON.parse(data));
  //     }
  //   }, []);

  const handleSection = () => {
    setSections([
      ...sections,
      { sectionName: sectionName, lectures: lectures },
    ]);
    localStorage.setItem(
      "sections",
      JSON.stringify([
        ...sections,
        { sectionName: sectionName, lectures: lectures },
      ])
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("sections");
    if (data) {
      setSections(JSON.parse(data));
    }
  }, []);

  const updateLectureName = (index) => (e) => {
    let newLectures = [...lectures];
    newLectures[index].lectureName = e.target.value;
    setLectures(newLectures);
    localStorage.setItem("lecture", JSON.stringify(lectures));
  };

  return (
    <div className="font-Lato md:px-10 lg:px-[140px]">
      <div className="px-5">
        <BackNavigation />
      </div>
      <div className="pt-[32px] px-5 md:px-0">
        <h1 className="font-bold text-xl lg:text-[28px]">Course content</h1>
        <div className="lg:flex lg:justify-between lg:items-center lg:mt-[16px]">
          <p className="text-[20px] font-medium pt-1 lg:pt-0">
            Manage course curriculum
          </p>
          <div className="flex justify-between space-x-[25px] md:space-x-16 lg:space-x-[32px] pt-[24px] lg:pt-0">
            <button className="bg-bcolor h-[38px] lg:w-[195px] lg:h-[43px] rounded w-full font-bold text-xs lg:text-base">
              Set Preview Video
            </button>
            <button className="bg-bcolor lg:flex lg:justify-between lg:px-6 lg:items-center  h-[38px] lg:w-[195px] lg:h-[43px] rounded w-full font-bold text-xs lg:text-base">
              <img src={eye} alt="icon" className="hidden lg:block" />
              Preview Course
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[32px] space-y-5">
        {sections.map(({ sectionName }, index) => (
          <AddSection
            key={index}
            lecture={lectures}
            sectionName={sectionName}
            setScectionName={setSectionName}
            id={id}
            setLectureName={setLectureName}
            updateLectureName={updateLectureName}
            showModal={showModal}
          />
        ))}
      </div>
      <div className="flex justify-center md:justify-start mt-[32px] mb-[37px]">
        <button
          onClick={showModalSection}
          className=" h-[44px] w-[217px] bg-bcolor rounded"
        >
          <div className="flex justify-center items-center space-x-2">
            <img src={blackPlus} alt="icon" className="w-[16px] h-[16px]" />
            <p className="text-base font-bold">Add New Section</p>
          </div>
        </button>
      </div>
      {show && (
        <AddLectureModal showModal={showModal} onClick={handleLecture} />
      )}
      {showSection && (
        <AddSectionModal showModal={showModalSection} onClick={handleSection} />
      )}
    </div>
  );
};

export default AddCourseContent;
