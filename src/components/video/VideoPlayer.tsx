import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";
import CanvasDraw from "react-canvas-draw";

export const VideoPlayer = () => {
  const {
    videoRef,
    setWidth,
    setHeight,
    videoUrl,
    isDrawing,
    width,
    height,
    color,
    canvasRef,
  } = useContext(MainContext);

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
        onClick={(e: React.MouseEvent<HTMLVideoElement>) => {
          console.log(e.clientX);
          console.log(e.clientY);
        }}
      >
        <source src={videoUrl ?? ""} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <CanvasDraw
        className={`absolute z-20 translate-x-1/2 ${
          isDrawing ? "" : "pointer-events-none"
        } right-1/2 top-5"`}
        hideGrid
        hideInterface
        canvasWidth={width}
        canvasHeight={height}
        brushColor={color}
        brushRadius={5}
        backgroundColor="none"
        loadTimeOffset={0}
        immediateLoading
        ref={canvasRef}
        onChange={(e: any) => {
          console.log(e);
        }}
      />
    </>
  );
};
