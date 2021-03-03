import React, { useContext } from 'react';
import { PatientContext } from '../PatientContext';
import BreakTimingsEditForm from './BreakTimingsEditForm';
const EditBreakTimings = props => {
    const [patient, setpatient] = useContext(PatientContext);
    const editPatient = (currentPatient) => {
        setpatient({
            type: "EDIT_PATIENT",
            payload: currentPatient
        });
        return true;
    }
    const cancelRow = () => {
        props.cancelRow();
    }
    return (
        <BreakTimingsEditForm npatient={patient.currentPatient} callb={editPatient} cancelRow={cancelRow} />
    )
}
export default EditBreakTimings