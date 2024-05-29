import React from 'react';
import './DailyReportListRow.css';

export function DailyReportListRow(props) {
  const { title, text } = props.reportData;
  
  const handleDelete = () => {
    props.onDelete(title);
  };

  return (
    <div className="daily-report-list-row">
      <span className="title">{title} {text}</span>
      <div className="button-container">
        <button className="edit-button" onClick={props.onEdit}>編集</button>
        <button className="delete-button" onClick={handleDelete}>削除</button>
      </div>
    </div>
  );
}
