import React, { useState } from "react";
import { DailyReportForm } from "../DailyReportComponent/DailyReportForm/DailyReportForm";
import { DailyReportList } from "../DailyReportComponent/DailyReportList/DailyReportList";
import { DailyReportDeleteConfirm } from "../DailyReportComponent/DailyReportDeleteConfirm";
import "./Modal.css";
/**
 * @param {object} props 
 * @param {DailyReportData[]} props.reportDataList
 * @param {Function} props.onSubmit
 * @param {Function} props.onEdit
 * @param {Function} props.onDelete
 * @param {Function} props.onDeleteConfirm
 * @param {Function} props.onDeleteCancel
 */

export function DailyReportEdit(props) {
  const [title , setTitle] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (_title) => {
    setTitle(_title);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  //props.onDelete = openModal;
  //props.onDeleteConfirm = console.log("aaa");
  //props.onDeleteCancel = closeModal();
  return (
    <div>
      <div id ="content">
      <DailyReportForm/>
        <DailyReportList
        reportDataList={props.reportDataList}
        onSubmit={props.onSubmit}
        onEdit={props.onEdit}
        onDelete={openModal}
        />
      </div>
      {modalOpen && (
        <div className="modal-overlay">
          <div className ="modal">
            <DailyReportDeleteConfirm 
            className = "modal-content"
            title = {title}
            onDelete={props.onDeleteConfirm}
            onCancel={closeModal}
            />
          </div>
        </div>
        
      )}
    </div>
  );
}
