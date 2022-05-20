import { ExclamationCircleIcon } from "@heroicons/react/outline";
import React from "react";
import BackNavigation from "../../../../components/BackNavigation";

const SetPreviewVideo = () => {
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
    </div>
  );
};

export default SetPreviewVideo;
