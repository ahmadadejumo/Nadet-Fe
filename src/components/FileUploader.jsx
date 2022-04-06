import React, { useState } from "react";
import Files from "react-files";
import download from "../assets/images/download.svg";
import X from "../assets/images/X.svg";

const FileUploader = ({ fileSize, note, maxFileSize, accepts }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onFilesError = (error) => {
    setError(error.message);
  };

  const filesRemoveOne = (file) => {
    const newFiles = [...files];
    newFiles.splice(file, 1);
    setFiles(newFiles);
  };

  return (
    <div>
      <div>
        <p className="pt-3 font-medium text-base">
          Maximum file size: <span className="font-bold">{fileSize}</span>
        </p>
        <p className="pt-2 font-normal text-base text-red-500">{note}</p>
      </div>
      <Files
        className="files-dropzone"
        onChange={onFilesChange}
        onError={onFilesError}
        accepts={accepts}
        multiple={false}
        maxFileSize={maxFileSize}
        minFileSize={0}
        clickable
      >
        <div
          className={`mt-[12px] cursor-pointer shadow-inner shadow-[#E8E8EB] border pt-[12px] pb-[15px] border-dashed border-[#E8E8EB] w-full rounded flex pl-[18px] space-x-3`}
        >
          <img src={download} alt="icon" />
          <p className="text-sm font-normal opacity-60">
            Drag or <span className="text-[#FBBC15]">upload</span> your product
            files
          </p>
        </div>
      </Files>
      {files.length > 0 ? (
        <div className="bg-gray-300 mb-10">
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
                    <div className="text-base font-semibold">{file.name}</div>
                    <div className="text-sm font-medium">
                      {file.sizeReadable}
                    </div>
                  </div>
                </li>
                <div className="flex items-center pr-1">
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
      {error && <p className="text-base font-medium text-red-500">{error}</p>}
    </div>
  );
};

export default FileUploader;
