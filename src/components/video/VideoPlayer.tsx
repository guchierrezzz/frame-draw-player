import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";
import { Canvas } from "./Canvas";

export const VideoPlayer = () => {
  const { videoRef, setWidth, setHeight, videoUrl, height } =
    useContext(MainContext);

  const handleVideoLoadedMetadata = (
    event: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = event.currentTarget;
    setWidth(video.clientWidth);
    setHeight(video.clientHeight);
  };

  return (
    <div className="pt-5" style={{ height: `calc(${height}px)` }}>
      <video
        ref={videoRef}
        onLoadedMetadata={handleVideoLoadedMetadata}
        className="absolute z-10 right-1/2 translate-x-1/2 max-h-[70%]"
      >
        <source src={videoUrl ?? ""} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Canvas />
    </div>
  );
};
