import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const VideoPlayer = () => {
  const { videoRef, setWidth, setHeight, videoUrl } = useContext(MainContext);

  const handleVideoLoadedMetadata = (
    event: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = event.currentTarget;
    setWidth(video.clientWidth);
    setHeight(video.clientHeight);
  };

  return (
    <>
      <video
        ref={videoRef}
        onLoadedMetadata={handleVideoLoadedMetadata}
        className="absolute z-10 right-1/2 translate-x-1/2 top-5 max-h-[70%]"
      >
        <source src={videoUrl ?? ""} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
