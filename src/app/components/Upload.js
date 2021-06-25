import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { toAbsoluteUrl } from '../../_metronic/_helpers';
import Button from '@material-ui/core/Button';
import uploadFileToBlob, { isStorageConfigured, azureBaseURL, uploadFileToBlobWithSite } from '../../azure-storage-blob';
import { DevConsoleLog } from '../SiteUtill';
import { Modal } from "react-bootstrap";
import Cropper from 'react-easy-crop'
import { stubTrue } from 'lodash';
import { getCroppedImg } from '../canvasUtils';
import CropImage from './CropImage';
const storageConfigured = isStorageConfigured();
const Type = {
  "image/png": "png",
  "image/jpeg": "jpeg",
};
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


function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}
export function Upload(props) {
  const { imageURL, name, path, setFieldValue, subName, upload_type, upload_id } = props;
  const previewURL = baseURL + imageURL;
  const imagePreview = {
    name: imageURL,
    preview: previewURL
  }
  const [imageSrc, setImageSrc] = React.useState(null);
  const [files, setFiles] = useState(imageURL ? [imagePreview] : []);
  const [uploading, setUploading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(1);
  const [imgType, setImageType] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null)
  // const [imgObj, setImgObj] = useState({
  //   imageSrc:'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
  // });
  DevConsoleLog("files-->", files);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      onFileChange(acceptedFiles);
      DevConsoleLog("acceptedFiles-->", acceptedFiles[0].path);
    }
  });

  const onFileChange = async (files) => {
    let fileSelected = files[0]
    if (storageConfigured) {
      setImageType(fileSelected.type);
      let imageDataUrl = await readFile(fileSelected);
      setImageSrc(imageDataUrl);
      setModalOpen(true);

    }
  };
  const blobToFile = (theBlob, fileName, imgType) => {
    return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: imgType })
  }
  const onFileUpload = async (files) => {
    if (storageConfigured) {
      //setUploading(true);
      const image = upload_type + ".png";
      const blobToFile = new File([files], 'imageCrop.png', {
        lastModified: new Date().getTime(),
        type: files.type,
      })
      const imagePreview = {
        name: 'imageCrop.png',
        preview: files
      }
      setFiles([imagePreview]);
      await uploadFileToBlobWithSite(files, upload_id, image).then((url) => {
        DevConsoleLog("name-->", name);
        DevConsoleLog("fileSelected.path-->", url);
        setFieldValue(name, url);
        //setFieldValue(subName, "siteid_900/workid_900/userid_900");
        setUploading(false);
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

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedAreaPixels.width / croppedAreaPixels.height)
    setCroppedAreaPixels(croppedAreaPixels);
  }
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
      )
      console.log('donee', croppedImage)
      setCroppedImage(croppedImage);
      onFileUpload(croppedImage);
      setModalOpen(false);
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels])
  return (
    <>
      <section className="container">
        {uploading && <div className="image-circle-loading" style={loadingContainer}>
          <div></div>
        </div>}
        <Button onClick={() => setModalOpen(true)}>upload</Button>
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

      <Modal
        className="croppingmodal"
        show={isModalOpen}
        onHide={setModalOpen}>
        <Modal.Header closeButton>
          Crop your image then click Save
          <Button
            onClick={showCroppedImage}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />

{/* <CropImage/> */}
        </Modal.Body>
      </Modal>
    </>
  );
}