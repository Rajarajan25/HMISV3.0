import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import {ModalProgressBar} from "../../_metronic/_partials/controls";

export function DeleteDialog({show,onHide,isloading,content,deleteAction }) {
  // if !content we should close modal
  useEffect(() => {
    if (!content) {
      onHide();
    }
  }, [content]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*begin::Loading*/}
      {isloading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {/* Customer Delete */}
          {content.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isloading && (
          // <span>Are you sure to permanently delete this customer?</span>
          <span>{content.message}</span>
        )}
        {isloading && <span>{content.loadingMsg||"Deleting..."}</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            {content.cancelLable||"Cancel"}
            
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteAction}
            className="btn btn-primary btn-elevate"
          >
            {content.okLable||"Delete"}
            
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
