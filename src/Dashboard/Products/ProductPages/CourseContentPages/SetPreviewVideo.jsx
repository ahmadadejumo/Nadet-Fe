import { ExclamationCircleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import BackNavigation from "../../../../components/BackNavigation";
import Files from "react-files";
import download from "../../../../assets/images/download.svg";
import X from "../../../../assets/images/X.svg";
import redX from "../../../../assets/images/redX.svg";

const SetPreviewVideo = () => {
  const [error, setError] = useState("");
  const [filess, setFiles] = useState([]);

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onFilesError = (error) => {
    setError(error.message);
  };

  const filesRemoveOne = (file) => {
    const newFiles = [...filess];
    newFiles.splice(file, 1);
    setFiles(newFiles);
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <div className="px-5 lg:px-0">
        <BackNavigation />
        <h1 className="font-bold text-2xl pt-[32px]">Course content</h1>
        <p className="font-medium text-xl">Course Settings</p>
      </div>
      <div className="flex justify-center mt-[24px] space-x-2 px-5 mx-5 py-[12px] rounded-lg bg-[#FAF1D8] border border-[#555557]">
        <div>
          <ExclamationCircleIcon className="h-[25px] w-[25px] text-red-700" />
        </div>

        <p className="text-xs font-bold text-[#212121CC]">
          Important Notice: It is advisable to always compress your videos to be
          as small as possible before uploading them. Creators are recommended
          to upload videos in the range 20MB to 100MB per video; this is because
          you want to be considerate to your customers watching the videos.
        </p>
      </div>
      <div className="mt-[32px] bg-white px-5 mb-[65px]">
        <h1 className="font-bold text-xl pt-[24px]">Upload Preview Video</h1>
        <hr className="bg-[#55555733] mt-[12px] mb-[18px]" />
        <Files
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={["video/mp4"]}
          multiple={false}
          maxFileSize={104857600}
          minFileSize={20971520}
          clickable
        >
          <div
            className={`cursor-pointer shadow-inner shadow-[#E8E8EB] border pt-[12px] pb-[15px] border-dashed border-[#E8E8EB] w-full rounded flex pl-[18px] space-x-3`}
          >
            <img src={download} alt="icon" />
            <p className="text-sm font-normal opacity-60 hidden lg:block">
              Drag or <span className="text-[#FBBC15]">upload</span> your
              product files
            </p>
            <p className="text-sm font-normal opacity-60 md:hidden">
              <span className="text-[#FBBC15]">upload</span> your video
            </p>
          </div>
        </Files>
        {filess.length > 0 ? (
          <ul>
            {filess.map((file) => (
              <li
                key={file.id}
                className="flex mb-2 justify-between bg-gray-300"
              >
                <div className="flex space-x-2">
                  <div className="flex justify-center">
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
                    <div className="text-base font-semibold">{file.name}</div>
                    <div className="text-sm font-medium">
                      {file.sizeReadable}
                    </div>
                  </div>
                </div>
                <div className="flex items-center pr-1 cursor-pointer">
                  <img
                    src={X}
                    alt="icon"
                    id={file.id}
                    className="w-5"
                    onClick={() => filesRemoveOne(file.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : null}
        {error && <p className="text-base font-medium text-red-500">{error}</p>}
        <div className="flex justify-between items-center pt-[40px] pb-[44px]">
          <div className="text-[#ED0B4CE5] lg:cursor-pointer flex space-x-3 lg:space-x-3 items-center font-bold text-lg lg:text-lg w-[55px]">
            <img
              src={redX}
              alt="icon"
              className="w-[11px] h-[11px] lg:h-[11px] lg:w-[11px]"
            />
            <p>Cancel</p>
          </div>
          <button className="w-[120px] h-[42px] bg-bcolor text-base font-bold rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPreviewVideo;
