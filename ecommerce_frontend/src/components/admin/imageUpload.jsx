import React, { useEffect, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

export default function ProducrImageUpload({
  image,
  setImage,
  uploadedImageUrl,
  setUploadedImageUrl,
}) {
  const inputRef = useRef(null);

  const handleImage = (e) => {
    console.log("file: ", e.target.files);
    const selectedFile = e.target.files?.[0];
    console.log("selectedFile: ", selectedFile);

    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];

    if (droppedFile) {
      setImage(droppedFile);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  async function uploadImageToCloudinary() {
    let data = new FormData();
    console.log("image: ", image);
    data.append("my_image", image);

    console.log("data: ",data);

    const res = await axios.post(
      "http://localhost:5000/api/admin/uploadImage",
      data
    );

    console.log("res.data: ", res.data);
    if (res) {
      setUploadedImageUrl(res.data.result.url);
    }
  }
  useEffect(() => {
    if (image !== null) {
      uploadImageToCloudinary();
    }
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-sm font-semibold mt-6 mb-2 block">
        Upload Image
      </Label>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full py-8 border-2 border-blue-200 border-dashed rounded-lg cursor-pointer bg-blue-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloudIcon className="w-10 h-10 text-slate-400 mb-4" />

              <p className="mb-2 text-sm text-slate-500">
                <span>drag or drop or click to upload image</span>
              </p>
            </div>
            <Input
              id="dropzone-file"
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={handleImage}
            />
          </label>
        </div>

        {image && (
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center text-sm">
              <FileIcon className="w-6 h-6" />
              <p className="ml-2">{image.name}</p>
              <button
                className="text-red-600 hover:text-white hover:bg-red-500 ml-3 p-1 rounded-sm"
                onClick={handleRemoveImage}
              >
                <XIcon className="w-4 h-4" />
                <span className="sr-only">Remove File</span>
              </button>
            </div>
          </div>
        )}

        {/* {!image ? (
            // <Label
            //   htmlFor="image-upload"
            //   className="flex flex-col items-center text-slate-400 py-8 rounded-md border-2 border-dashed border-slate-400 cursor-pointer"
            //   onClick={() => console.log("clicked")}
            // >
            //   <UploadCloudIcon className="w-10 h-10 text-slate-400 mb-4" />
            //   <span>drag or drop or click to upload image</span>
            // </Label>
          <Input
            type="file"
            // className="hidden"
            ref={inputRef}
            onChange={handleImage}
          />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8" />
              <p>{image.name}</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-white hover:bg-red-500"
                onClick={handleRemoveImage}
              >
                <XIcon className="w-4 h-4" />
                <span className="sr-only">Remove File</span>
              </Button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
