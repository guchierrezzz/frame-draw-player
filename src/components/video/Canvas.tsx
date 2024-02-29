import { useContext } from "react";
import CanvasDraw from "react-canvas-draw";
import { MainContext } from "../../provider/MainContext";

export const Canvas = () => {
  const { isDrawing, width, height, color, canvasRef, videoRef, setVertices } =
    useContext(MainContext);

  const handleVerticeSelection = (e: any): void => {
    if (videoRef.current) {
      let vertices = [];
      for (let i = 0; i < e.lines.length; i++) {
        const clientX = e.lines[i].points[0].x;
        const clientY = e.lines[i].points[0].y;

        const videoX = Math.round(
          (clientX / videoRef.current.clientWidth) * videoRef.current.videoWidth
        );
        const videoY = Math.round(
          (clientY / videoRef.current.clientHeight) *
            videoRef.current.videoHeight
        );

        vertices.push({ x: videoX, y: videoY });
      }
      vertices.push({ ...vertices[0] });
      setVertices(vertices);
    }
  };

  return (
    <CanvasDraw
      className={`absolute z-20 translate-x-1/2 ${
        isDrawing ? "" : "pointer-events-none"
      } right-1/2 w-full h-full"`}
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
      onChange={handleVerticeSelection}
    />
  );
};
