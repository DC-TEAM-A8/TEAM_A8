import { DailyReportHome } from "@/components/DailyReport/DailyReportHome/DailyReportHome";
import { DailyReportForm } from "@/components/DailyReport/DailyReportComponent/DailyReportForm"
// import { DRHome } from "./home"
// import { DRForm } from "./form"

export default async function DailyReport() {
  'use server'
  const reportDataList = [
    {
      title: '1',
      text: 'これは'
    },
    {
      title: '２',
      text: 'home'
    },
    {
      title: '３',
      text: 'です'
    },
  ]
  const submitAction = () => console.log("submit");//window.location.href = "/DailyReport";
  const editAction = () => console.log('edit');
  const deleteAction = () => console.log('delete');
  const deleteConfirmAction = () => console.log('delete confirm');
  const deleteCancelAction = () => console.log('delete cancel');

  async function action() {
    console.log("server action")
  }

  return (
    <div>
      {/* <DRHome>
        <DRForm />
      </DRHome> */}
      <DailyReportHome
        reportDataList={reportDataList}
        // onSubmit={onSubmit}
        // onEdit={onEdit}
        // onDelete={onDelete}
        // onDeleteConfirm={onDeleteConfirm}
        // onDeleteCancel={onDeleteCancel}
        // submitAction={submitAction}
        // editAction={editAction}
        // deleteAction={deleteAction}
        // deleteConfirmAction={deleteConfirmAction}
        // deleteCancelAction={deleteCancelAction}
      >
        <DailyReportForm />
      </DailyReportHome>
    </div>
  );
}
