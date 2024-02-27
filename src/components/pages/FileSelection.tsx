import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const FileSelection = () => {
  const { videoUrl, setVideoUrl, inputRef } = useContext(MainContext);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoUrl(videoUrl);
    }
  };

  return (
    <>
      {!videoUrl && (
        <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex flex-col gap-5 items-center max-h-[70%]">
          <h1 className="text-5xl tracking-widest text-center uppercase">
            FrameDraw Player
          </h1>
          <p>Para iniciar, selecione o arquivo abaixo:</p>
          <input
            type="file"
            className="w-full max-w-xs file-input file-input-bordered"
            accept="video/*"
            onChange={handleFileChange}
            ref={inputRef}
          />
        </div>
      )}
    </>
  );
};
