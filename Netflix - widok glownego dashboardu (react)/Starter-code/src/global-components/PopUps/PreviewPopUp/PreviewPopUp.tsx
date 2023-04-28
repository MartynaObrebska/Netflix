import React from "react";
import "./PreviewPopUp.scss";
import { CloseCircle } from "iconsax-react";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { setPreviewActive } from "@/app/Stores/reducers/Preview/previewSlice";

export const PreviewPopUp = () => {
  const active = useAppSelector((state) => state.preview.active);
  const dispatch = useAppDispatch();

  const handleCloseOnClick = () => {
    dispatch(setPreviewActive(false));
  };

  const previewClassName = `preview-container ${active ? "active" : ""}`;
  return (
    <div className={previewClassName}>
      <div className="preview-backdrop" />
      <div className="preview">
        <div className="preview-close-btn" onClick={handleCloseOnClick}>
          <CloseCircle size="32" variant="Bold" />
        </div>
      </div>
    </div>
  );
};
