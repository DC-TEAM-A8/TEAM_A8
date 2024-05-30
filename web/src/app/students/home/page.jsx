"use server"

import React from 'react'
import { Home } from "@/components/Home"
import { DailyReportForm } from '@/components/DailyReport/DailyReportComponent/DailyReportForm/DailyReportForm'

const API_BASE = "http://localhost:8080"

export default async function HomePage() {
  const attendanceData = [
    {
      date: new Date('2024-06-01'),
      status: [
        true,
        false
      ]
    },
    {
      date: new Date('2024-06-02'),
      status: [
        false,
        true
      ]
    }
  ]
  const schedule = [
    {
      date: new Date('2024-05-29'),
      scheduleName: [
        'HTML',
        'Java応用'
      ]
    },
    {
      date: new Date('2024-06-01'),
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
