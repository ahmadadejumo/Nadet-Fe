import React, { useState } from "react";
import BackNavigation from "../../../../components/BackNavigation";
import Files from "react-files";
import download from "../../../../assets/images/download.svg";
import X from "../../../../assets/images/X.svg";
import redX from "../../../../assets/images/redX.svg";
import validator from "validator";
import { Oval } from "react-loader-spinner";
import cloudUpload from "../../../../assets/images/cil_cloud-upload.svg";

const EditCourseSection = () => {
  const [toggleButtonState, setToggleButtonState] = useState(1);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const toggleButton = (index) => {
    setToggleButtonState(index);
  };

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

  const validate = (value) => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(isLoading);
      if (validator.isURL(value)) {
        setErrorMsg("URL is valid");
        setIsValid(!isValid);
      } else {
        setErrorMsg("URL is not valid");
        setIsValid(isValid);
      }
    }, 3000);
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
    <div className="font-Lato md:h-screen px-[140px]">
      <div className="px-5 lg:px-0">
        <BackNavigation />
        <h1 className="pt-[32px] text-[24px] lg:text-[28px] font-bold">
          Course content
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-[20px] lg:text-[24px] font-medium pt-1">
            Lecture 1
          </p>
          <Files
            className="files-dropzone"
            onChange={onFilesChange}
            onError={onFilesError}
            accepts={["image/*", ".pdf", "video/mp4"]}
            maxFileSize={104857600}
            minFileSize={0}
            clickable
          >
            <button className="w-[208px] lg:w-[253px] h-[37px] lg:h-[42px] text-xs lg:text-[16px] font-bold rounded mt-[24px] bg-bcolor">
              Upload Course Resource
            </button>
          </Files>
        </div>
      </div>
      <div className="mt-[32px] bg-white">
        <div className="flex justify-center lg:justify-start px-7 pt-[24px]">
          <button
            onClick={() => toggleButton(1)}
            className={`${
              toggleButtonState === 1 ? "bg-[#8492A685]" : "bg-[#E8E8EB75]"
            } h-[50px] w-full lg:w-[191px] lg:h-[70px] border rounded-l text-[16px] font-bold`}
          >
            Upload File
          </button>
          <button
            onClick={() => toggleButton(2)}
            className={`${
              toggleButtonState === 2 ? "bg-[#8492A685]" : "bg-[#E8E8EB75]"
            } h-[50px] px-3 lg:px-5 w-full border lg:w-[191px] lg:h-[70px] rounded-r text-[16px] font-bold`}
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
                {/* Mobile and tablet */}
                <div className="mt-[32px] lg:hidden cursor-pointer shadow-inner shadow-[#E8E8EB] border pt-[12px] pb-[15px] border-dashed border-[#E8E8EB] w-full rounded flex pl-[18px] space-x-3">
                  <img src={download} alt="icon" />
                  <p className="text-sm font-normal opacity-60">
                    Drag or <span className="text-[#FBBC15]">upload</span> your
                    file
                  </p>
                </div>

                {/* Desktop responsiveness */}
                <div className="mt-[37px] cursor-pointer border border-dashed rounded-[32px] border-[#555557]">
                  <div className="flex justify-center pt-5">
                    <img src={cloudUpload} alt="icon" />
                  </div>
                  <p className="text-xl font-bold text-center">
                    Drag and drop or{" "}
                    <span className="text-bcolor">Browse to choose a file</span>
                  </p>
                  <p className="text-xl text-gray-400 text-center pb-5">
                    (Image, Video, PDF)
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
                onChange={(e) => setUrl(e.target.value)}
                className="mt-[32px] outline-bcolor shadow-inner shadow-[#E8E8EB] border h-[44px] border-dashed border-[#E8E8EB] w-full rounded pl-[18px]"
              />
              {!isValid ? (
                <span className="text-red-500 text-sm">{errorMsg}</span>
              ) : (
                <span className="text-green-500 text-sm">{errorMsg}</span>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => validate(url)}
                  disabled={isLoading}
                  className="bg-bcolor flex justify-center items-center w-[72px] h-[30px] rounded mt-[20px] text-[12px] font-bold"
                >
                  {isLoading ? (
                    <Oval
                      ariaLabel="loading-indicator"
                      height={23}
                      width={23}
                      strokeWidth={4}
                      color="grey"
                      secondaryColor="#FBBC15"
                    />
                  ) : (
                    "Verify"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex px-5 space-x-[12px] mt-[32px]">
          <input
            type="checkbox"
            // defaultChecked={!showOriginalPrice}
            // onClick={handleOriginalPrice}
            className="form-checkbox text-bcolor w-[24px] h-[24px] border border-gray-500 rounded mt-[2px]"
          />
          <div>
            <h1 className="font-bold text-base">Enable resources download</h1>
            <p className="text-xs">
              Checking this option will enable a download button for your
              students
            </p>
          </div>
        </div>
        <div className="mt-[32px] px-5">
          <h1 className="font-bold text-base">Description</h1>
          <textarea
            name="description"
            // cols="30"
            // rows="10"
            placeholder="Enter product description here..."
            className="mt-[16px] w-full h-[79px] pl-[16px] pt-[16px] outline-none border rounded text-sm"
          />
        </div>
        <div className="px-5 pt-[30px] flex justify-between items-center pb-[50px] mb-10">
          <div>
            <button className="text-[#ED0B4CE5] flex justify-between items-center font-bold text-xs w-[55px]">
              <img src={redX} alt="icon" className="w-[7px] h-[7px]" />
              Cancel
            </button>
          </div>
          <div className="space-x-[17px]">
            <button className="font-bold text-sm">Preview</button>
            <button className="w-[120px] h-[42px] bg-bcolor text-base font-bold rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourseSection;
