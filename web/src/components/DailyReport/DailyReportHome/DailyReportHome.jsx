import { DailyReportForm } from "../DailyReportComponent/DailyReportForm/DailyReportForm";
import { DailyReportList } from "../DailyReportComponent/DailyReportList/DailyReportList";
/**
 *@param {object} props 
 * @param {DailyReportData[]} props.reportDataList
 * @param {Function} props.onSubmit
 * @param {Function} props.onEdit
 * @param {Function} props.onDelete
 */
export function DailyReportHome(props) {
  return (
    <div>
      <DailyReportForm/>
      <DailyReportList
      reportDataList={props.reportDataList}
      onSubmit={props.onSubmit}
      onEdit={props.onEdit}
      onDelete={props.onDelete}
      />
    </div>
  );
}
