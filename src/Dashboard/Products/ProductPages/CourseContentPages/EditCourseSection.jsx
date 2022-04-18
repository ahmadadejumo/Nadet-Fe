import React, { useState } from "react";
import BackNavigation from "../../../../components/BackNavigation";
import Files from "react-files";
import download from "../../../../assets/images/download.svg";
import X from "../../../../assets/images/X.svg";

const EditCourseSection = () => {
  const [toggleButtonState, setToggleButtonState] = useState(1);

  const toggleButton = (index) => {
    setToggleButtonState(index);
  };

  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const onFilesChange = (files) => {
    setFiles(files);
    console.log(files);
  };

  const onFilesError = (error) => {
    setError(error.message);
  };

  const filesRemoveOne = (file) => {
    const newFiles = [...files];
    newFiles.splice(file, 1);
    setFiles(newFiles);
  };

  //   const fileUpload = () => {
  //     const formData = new FormData();
  //     Object.keys(files).forEach((key) => {
  //       const file = this.state.files[key];
  //       formData.append(
  //         key,
  //         new Blob([file], { type: file.type }),
  //         file.name || "file"
  //       );
  //     });
  //   };

  return (
    <div className="font-Lato">
      <div className="px-5">
        <BackNavigation />
        <h1 className="pt-[32px] text-[24px] font-bold">Course content</h1>
        <p className="text-[20px] font-medium pt-1">Lecture 1</p>
        <Files
          className="files-dropzone"
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={["image/*", ".pdf", "video/mp4"]}
          maxFileSize={104857600}
          minFileSize={0}
          clickable
        >
          <button className="w-[208px] h-[37px] text-xs font-bold rounded mt-[24px] bg-bcolor">
            Upload Course Resource
          </button>
        </Files>
      </div>
      <div className="mt-[32px] bg-white">
        <div className="flex justify-center px-7 pt-[24px]">
          <button
            onClick={() => toggleButton(1)}
            className={`${
              toggleButtonState === 1 ? "bg-[#8492A685]" : "bg-[#E8E8EB75]"
            } h-[50px] w-full border rounded-l text-[16px] font-bold`}
          >
            Upload File
          </button>
          <button
            onClick={() => toggleButton(2)}
            className={`${
              toggleButtonState === 2 ? "bg-[#8492A685]" : "bg-[#E8E8EB75]"
            } h-[50px] px-3 w-full border rounded-r text-[16px] font-bold`}
          >
            Import from External Link
          </button>
        </div>
        <div className="px-5">
          {toggleButtonState === 1 ? (
            <>
              <Files
                className="files-dropzone"
                onChange={onFilesChange}
                onError={onFilesError}
                accepts={["image/*", ".pdf", "video/mp4"]}
                maxFileSize={104857600}
                minFileSize={0}
                clickable
              >
                <div className="mt-[32px] cursor-pointer shadow-inner shadow-[#E8E8EB] border pt-[12px] pb-[15px] border-dashed border-[#E8E8EB] w-full rounded flex pl-[18px] space-x-3">
                  <img src={download} alt="icon" />
                  <p className="text-sm font-normal opacity-60">
                    Drag or <span className="text-[#FBBC15]">upload</span> your
                    file
                  </p>
                </div>
              </Files>
              {files.length > 0 ? (
                <div className="bg-gray-300 mb-10 rounded mt-2">
                  <ul>
                    {files.map((file) => (
                      <div className="flex justify-between" key={file.id}>
                        <li className="flex space-x-2 h-16">
                          <div className="w-16 flex justify-center">
                            {file.preview.type === "image" ? (
                              <img
                                className="w-16 object-contain"
                                src={file.preview.url}
                                alt="file"
                              />
                            ) : (
                              <div className="w-16 text-2xl  h-16 text-center bg-gray-400 pt-4">
                                {file.extension}
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="text-base font-semibold">
                              {file.name}
                            </div>
                            <div className="text-sm font-medium">
                              {file.sizeReadable}
                            </div>
                          </div>
                        </li>
                        <div className="flex items-center pr-1 cursor-pointer">
                          <img
                            src={X}
                            alt="icon"
                            id={file.id}
                            className="w-5"
                            onClick={() => filesRemoveOne(file.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              ) : null}
              {error && (
                <p className="text-base font-medium text-red-500">{error}</p>
              )}
            </>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Insert link here..."
                className="mt-[32px] outline-bcolor shadow-inner shadow-[#E8E8EB] border h-[44px] border-dashed border-[#E8E8EB] w-full rounded pl-[18px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditCourseSection;
