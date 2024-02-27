import { useContext } from "react";
import { VideoDashboard } from "../video/VideoDashboard";
import { VideoPlayer } from "../video/VideoPlayer";
import { MainContext } from "../../provider/MainContext";

export const VideoPage = () => {
  const { videoUrl } = useContext(MainContext);
  return (
    <>
      {videoUrl && (
        <>
          <VideoPlayer />
          <VideoDashboard />
        </>
      )}
    </>
  );
};
