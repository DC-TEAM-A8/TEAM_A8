import React from 'react';
import './DailyReportDeleteConfirm.css';

export function DailyReportDeleteConfirm(props) { 
  const handleDelete = () => {
    props.onDelete();
  }
  
  const handleCancel = () => {
    props.onCancel();
  }
  
  return (
    <div className="deleteConfirm">
      <h1>確認</h1>
      <p>{props.title}を削除してもよろしいですか？</p>
      <form>
        <button onClick={handleDelete} className="deleteConfirmButton">削除</button>
        <br />
        <a href="#" onClick={handleCancel} className="cancelLink">キャンセル</a>
      </form>
    </div>
  );
}
