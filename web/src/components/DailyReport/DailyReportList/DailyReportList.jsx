import { DailyReportListRow } from "../DailyReportListRow/DailyReportListRow";

/**
 * @param {Object} props
 * @param {DailyReportData[]} props.reportDataList - レポートのデータのリスト
 * @param {Function} props.onEdit - 編集ボタンがクリックされたときのハンドラ
 * @param {Function} props.onDelete - 削除ボタンがクリックされたときのハンドラ
 */
export function DailyReportList(props) {
  return (
    <div>
      {props.reportDataList.map((reportData, index) => (
        <DailyReportListRow
          key={index}
          reportData={reportData}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}
