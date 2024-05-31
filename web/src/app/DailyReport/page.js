import { DailyReportHome } from "@/components/DailyReport/DailyReportHome/DailyReportHome";
import { DailyReportForm } from "@/components/DailyReport/DailyReportComponent/DailyReportForm"
// import { DRHome } from "./home"
// import { DRForm } from "./form"

export default async function DailyReport() {
  const response = await fetch("http://localhost:8080/dailyReports?sort=id,desc", {
    cache: "no-cache",
  });
  const result = await response.json();
  const reportDataList = result["_embedded"]["dailyReports"].map(dr => ({title:dr.title,text:dr.content}))
  console.log(reportDataList);

  return (
    <div>
      {/* <DRHome>
        <DRForm />
      </DRHome> */}
      <DailyReportHome
        reportDataList={reportDataList}
        //onSubmit={submitAction}
      >
        <DailyReportForm
          action={async formData => {
            "use server"
            const data = {
              title: formData.get("title"),
              content: formData.get("content"),
              user: "/users/1",
              posted: new Date()
            }
            await fetch("http://localhost:8080/dailyReports", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            })
          }}
        />
      </DailyReportHome>
    </div>
  );
}
