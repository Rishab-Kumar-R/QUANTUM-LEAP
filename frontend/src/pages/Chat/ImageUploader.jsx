import React, { useState, useRef, useCallback } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { ImagePlus, Crop, Trash2, Check, AlertCircle } from "lucide-react";

const ImageUploader = ({ setImage, maxFileSize = 10 * 1024 * 1024 }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ 
    unit: '%',
    width: 50,
    aspect: 16 / 9 
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [error, setError] = useState(null);
  const imageRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setError(null);

    if (file) {
      // File size validation
      if (file.size > maxFileSize) {
        setError(`File too large. Max size is ${maxFileSize / (1024 * 1024)}MB`);
        return;
      }

      // File type validation
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setError('Invalid file type. Please upload an image.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (crop) => {
    setCompletedCrop(crop);
  };

  const handleImageCrop = useCallback(() => {
    if (!completedCrop || !previewCanvasRef.current || !imageRef.current) {
      return;
    }

    const canvas = previewCanvasRef.current;
    const image = imageRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const croppedImageUrl = canvas.toDataURL('image/jpeg');
    setImage(croppedImageUrl);
  }, [completedCrop, setImage]);

  const handleClear = () => {
    setImageSrc(null);
    setCompletedCrop(null);
    setImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4 w-full max-w-xl mx-auto">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-6 h-6" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex items-center space-x-4">
        <input
          ref={fileInputRef}
          type="file"
          id="image-upload"
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleImageUpload}
          className="hidden"
        />
        <label 
          htmlFor="image-upload" 
          className="
            flex items-center space-x-2 
            p-2 px-4 
            bg-indigo-500 
            text-white 
            rounded-xl 
            hover:bg-indigo-600 
            cursor-pointer 
            transition-colors
            group
            shadow-md hover:shadow-lg
          "
        >
          <ImagePlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Upload Image</span>
        </label>

        {imageSrc && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleImageCrop}
              className="
                p-2 
                bg-green-500 
                text-white 
                rounded-full 
                hover:bg-green-600 
                transition-colors
                shadow-md hover:shadow-lg
              "
              title="Crop Image"
            >
              <Crop className="w-5 h-5" />
            </button>
            <button
              onClick={handleClear}
              className="
                p-2 
                bg-red-500 
                text-white 
                rounded-full 
                hover:bg-red-600 
                transition-colors
                shadow-md hover:shadow-lg
              "
              title="Clear Image"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {imageSrc && (
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm">
            <ReactCrop
              src={imageSrc}
              onImageLoaded={(img) => {
                imageRef.current = img;
              }}
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={handleCropComplete}
              className="rounded-lg overflow-hidden"
            />
          </div>

          <canvas
            ref={previewCanvasRef}
            className="hidden"
            style={{
              width: Math.round(completedCrop?.width ?? 0),
              height: Math.round(completedCrop?.height ?? 0)
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
