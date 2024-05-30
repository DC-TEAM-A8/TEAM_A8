"use server"

import React from 'react'
import { Home } from "@/components/Home"
import { DailyReportForm } from '@/components/DailyReport/DailyReportComponent/DailyReportForm/DailyReportForm'

const API_BASE = "http://localhost:8080"

export default async function HomePage() {
  /** @type {{date:Date,status:[boolean,boolean]}[]} */
  const attendanceData = [
    {
      date: new Date('2024-05-28'),
      status: [
        true,
        false
      ]
    }
  ]
  /**
   * @type { { date: Date, scheduleName: [string, string] }[] }
   */
  const schedule = [
    {
      date: new Date('2024-05-30'),
      scheduleName: [
        'HTML',
        'Java応用'
      ]
    },
    {
      date: new Date('2024-05-31'),
      scheduleName: [
        'JavaScript',
        'Java応用'
      ]
    }
  ]

  return <div>
    <Home
      attendanceData={attendanceData}
      schedule={schedule}
    >
      <DailyReportForm action={async formData => {
        "use server"
        const data = {
          title: formData.get("title"),
          content: formData.get("content"),
          user: "/users/1",
          posted: new Date()
        }
        await fetch(`${API_BASE}/dailyReports`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
      }} />
    </Home>
  </div>
}
