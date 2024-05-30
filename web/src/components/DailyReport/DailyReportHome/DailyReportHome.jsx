"use client"

// import { DailyReportForm } from "../DailyReportComponent/DailyReportForm/DailyReportForm";
import { DailyReportList } from "../DailyReportComponent/DailyReportList/DailyReportList";
import { DailyReportDeleteConfirm } from "../DailyReportComponent/DailyReportDeleteConfirm";

import React, { useState } from "react";
import "./Modal.css";

/**
 * @typedef {object} DailyReportData
 * @property {string} title
 * @property {string} text
 */

/**
 * @typedef {object} IDailyReportHomeProps 
 * @property {DailyReportData[]} reportDataList
 * @property {Function} [onSubmit]
 * @property {Function} [onEdit]
 * @property {Function} [onDelete]
 * @property {Function} [onDeleteConfirm]
 * @property {Function} [onDeleteCancel]
 * @property {import("react").ReactNode} children
 */

/** @type {Partial<IDailyReportHomeProps>} */
const defaultProps = {
  // onSubmit: () => console.log("onSubmit"),
  // onEdit: () => console.log("onEdit"),
  // onDelete: () => console.log("onDelete"),
  // onDeleteConfirm: () => console.log("onDeleteConfirm"),
  // onDeleteCancel: () => console.log("onDeleteCancel"),
}

/**
 * @param {IDailyReportHomeProps} propsArg
 */
export function DailyReportHome(propsArg) {
  const props = {...defaultProps, ...propsArg}
  const [title, setTitle] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (_title) => {
    setTitle(_title);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div id="content">
        {/* <DailyReportForm /> */}
        {props.children}
        <DailyReportList
          reportDataList={props.reportDataList}
          onSubmit={props.onSubmit}
          onEdit={props.onEdit}
          onDelete={openModal}
        />
      </div>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <DailyReportDeleteConfirm
              className="modal-content"
              title={title}
              onDelete={props.onDeleteConfirm}
              onCancel={closeModal}
            />
          </div>
        </div>

      )}
    </div>
  );
}
