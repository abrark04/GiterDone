import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImgUploader = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (fileItems) => {
    const fileItem = fileItems[0];
    setFile(fileItem.file);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/upload-image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setCaption(result.caption);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <FilePond
        files={[]}
        onupdatefiles={handleFileChange}
        allowMultiple={false}
        acceptedFileTypes={["image/*"]}
      />
      <button onClick={handleUpload}>Upload and Analyze</button>
      <div>
        <h3>Results:</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default ImgUploader;
