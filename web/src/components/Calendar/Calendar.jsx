"use client";

//@ts-check

import React, { useState } from "react";
import dayjs from "dayjs";
import { useMemo } from "react";

/**
 * 前後2週間分の日付を取得する
 * 1週間分の日付を1つの配列とし、それを5個繰り返す
 * 
 * @argument {dayjs.Dayjs} today
 * @returns {dayjs.Dayjs[][]}
 */
function useCalDates(today) {
  const todayWeekStart = today.startOf("week");

  return [-2, -1, 0, 1, 2].map(weekOffset => {
    return [0, 1, 2, 3, 4, 5, 6].map((dayOffset) => {
      return todayWeekStart.add(weekOffset, "week").add(dayOffset, "day");
    });
  })
}

/**
 * @typedef {Object} ICalendarProps
 * @property {(changedDate: Date) => void} onChange
 * @property {Date} targetDate
 */

/**
 * クリック可能なカレンダーを表示するコンポーネント
 * @param {ICalendarProps} props
 */
export function Calendar(props) {
  const [ targetDate, setTargetDate ] = useState(props.targetDate);
  const days = useMemo(() => useCalDates(dayjs(targetDate)), [targetDate])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {[
          "日",
          "月",
          "火",
          "水",
          "木",
          "金",
          "土",
        ].map((week, i) => (
          <div key={i} className={`p-1 w-8 h-8 flex justify-center items-center select-none ${
            i === 0 ? "text-red-500" : i === 6 ? "text-blue-500" : ""
          }`}>
            {week}
          </div>
        ))}
      </div>
      {days.map((week, i) => (
        <div key={week[0].toISOString()} className="flex flex-row">
          {week.map((day, j) => (
            <button key={day.toISOString()} className={`p-1 w-8 h-8 flex justify-center items-center ${
              day.isSame(targetDate, "day")
              ? "bg-blue-500 text-white"
              : day.isSame(new Date(), "day")
              ? "bg-orange-300"
              : ""
            }`} onClick={() => {
              setTargetDate(day.toDate());
              props.onChange(day.toDate());
            }}>
              {day.format("D")}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
