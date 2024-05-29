import { DailyReportListRow } from "../DailyReportListRow/DailyReportListRow";
export function DailyReportList(props) {
  return (
    <div style = {{padding:"5px"}}>
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
