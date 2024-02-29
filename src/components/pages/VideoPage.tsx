import { useContext } from "react";
import { VideoDashboard } from "../video/VideoDashboard";
import { VideoPlayer } from "../video/VideoPlayer";
import { MainContext } from "../../provider/MainContext";

export const VideoPage = () => {
  const { videoUrl } = useContext(MainContext);
  return (
    <>
      {videoUrl && (
        <div className="flex flex-col items-center justify-center w-5/6 gap-10 mx-auto">
          <VideoPlayer />
          <VideoDashboard />
        </div>
      )}
    </>
  );
};
