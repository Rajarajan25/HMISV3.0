import { Field } from 'formik';
import React from 'react';
import Button from '@material-ui/core/Button';
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Upload } from './Upload';
import uploadFileToBlob, { isStorageConfigured } from '../../azure-storage-blob';
export function UploadAvatar(props) {
    return (
        <>
        <div className="col-3">
                <input accept="image/*" className={props.classes.input||""} style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
                <label htmlFor="raised-button-file" className="up_avatar">
                    <Button variant="outlined" component="span" className={props.classes.button||""}>
                        <img src={toAbsoluteUrl("/media/patients/avatar_icon.svg")} alt="" className="d-block mb-2" />
                        <span className="d-block">Upload Avatar</span>
                    </Button>
                </label>
            </div>
        </>
    );
}

export function UploadAvatarFormik(props) {
    return (
        <>
            <Upload {...props}/>
        </>
    );
}