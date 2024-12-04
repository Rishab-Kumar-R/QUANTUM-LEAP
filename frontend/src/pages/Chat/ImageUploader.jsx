// ImageUploader.jsx
import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageUploader = ({ setImage }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (cropData) => {
    if (cropData.width && cropData.height && imageSrc) {
      // Extract the cropped area (simulate cropping functionality)
      setImage(imageSrc); // Update the parent component with cropped image
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <span className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500">
          Upload Image
        </span>
      </label>

      {imageSrc && (
        <ReactCrop
          src={imageSrc}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={handleCropComplete}
        />
      )}
    </div>
  );
};

export default ImageUploader;
