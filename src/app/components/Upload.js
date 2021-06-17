import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toAbsoluteUrl } from '../../_metronic/_helpers';
import Button from '@material-ui/core/Button';
import uploadFileToBlob, { isStorageConfigured, azureBaseURL } from '../../azure-storage-blob';
import { DevConsoleLog } from '../SiteUtill';
const storageConfigured = isStorageConfigured();
const baseURL = azureBaseURL();
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "-98px",
  marginLeft: "-2px",
  padding: 0,
  position: "absolute"
};

const loadingContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "-10px",
  marginLeft: "-8px",
  padding: 0,
  position: "absolute"
};

const thumb = {
  position: "relative",
  display: "inline-flex",
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 2,
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",

};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  width: "100%",
  borderRadius: "50%",
  margin: "0",
  outline: "0",
};

const thumbButton = {
  position: "absolute",
  right: 10,
  bottom: 10,
  background: "#00000082",
  color: "#fff",
  border: 0,
  fontSize: "15px",
  cursor: "pointer",
  borderRadius: "50%"
};

const editImage = (image, done) => {
  const imageFile = image.doka ? image.doka.file : image;
  const imageState = image.doka ? image.doka.data : {};
  // create({
  //   // recreate previous state
  //   ...imageState,

  //   // load original image file
  //   src: imageFile,
  //   outputData: true,

  //   onconfirm: ({ file, data }) => {
  //     Object.assign(file, {
  //       doka: { file: imageFile, data }
  //     });
  //     done(file);
  //   }
  // });
};

export function Upload(props) {
  const { imageURL, name } = props;
  const previewURL = baseURL + imageURL;
  const imagePreview = {
    name: imageURL,
    preview: previewURL
  }
  const [files, setFiles] = useState(imageURL ? [imagePreview] : []);
  const [uploading, setUploading] = useState(false);
  DevConsoleLog("files-->", files);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      onFileUpload(acceptedFiles);
      DevConsoleLog("acceptedFiles-->", acceptedFiles[0].path);
      
    }
  });

  const onFileUpload = async (files) => {
    let fileSelected=files[0]
    if (storageConfigured) {
      setUploading(true);
      await uploadFileToBlob(fileSelected).then((blobs) => {
        DevConsoleLog("name-->", name);
        DevConsoleLog("fileSelected.path-->", fileSelected.path);
        props.setFieldValue(name, fileSelected.path);
        setUploading(false);
        setFiles(
          files.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      });

    }
  };

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
      <button
        style={thumbButton}
        onClick={(event) => {
          event.stopPropagation();
          setFiles([]);
          props.setFieldValue(name, "");
        }
          // editImage(file, (output) => {
          //   
          //   const updatedFiles = [...files];

          //   // replace original image with new image
          //   updatedFiles[index] = output;

          //   // revoke preview URL for old image
          //   if (file.preview) URL.revokeObjectURL(file.preview);

          //   // set new preview URL
          //   Object.assign(output, {
          //     preview: URL.createObjectURL(output)
          //   });

          //   // update view
          //   setFiles(updatedFiles);
          // })
        }
      >
        X
      </button>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      {uploading&&<div class="image-circle-loading" style={loadingContainer}>
        <div></div>
      </div>}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <label htmlFor="raised-button-file" className="up_avatar">
          <Button component="span">
            <img src={toAbsoluteUrl("/media/patients/avatar_icon.svg")} alt="" className="d-block mb-2" />
            <span className="d-block">Upload Avatar</span>
          </Button>
        </label>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>

    </section>
  );
}