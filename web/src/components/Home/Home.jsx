"use client"

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useState } from 'react';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
// import { DailyReportForm } from '../DailyReport/DailyReportComponent/DailyReportForm';
import { Header } from '../Header';
import { ReviewForm } from '../ReviewForm';
import { Warning } from '../Warning';
dayjs.extend(isBetween);

/**
 * @param {Date} date
 * @param {Date} [today]
 * @returns {boolean}
 */
function isToday(date, today = undefined) {
  const _today = today || new Date();
  return date.toDateString() === _today.toDateString();
}

/**
 * @typedef {[boolean, boolean]} TAttendance
 * @typedef {object} IAttendanceData
 * @property {Date} date
 * @property {TAttendance} status
 */
/**
 * @typedef {object} IFailedAttendance
 * @property {Date} date
 * @property {boolean} isMorning
 */
/**
 * @typedef {object} ISchedue
 * @property {Date} date
 * @property {[string, string]} scheduleName
 */

/**
 * @typedef {object} IHomeProps
 * @property {string} [className]
 * @property {IAttendanceData[]} attendanceData
 * @property {ISchedule[]} schedule
 * @property {React.ReactNode} [dailyReportForm]
 * @property {React.ReactNode} [children]
 * @property {() => void} [onAttend]
 * @param { IHomeProps } props
 */
export function Home(props) {
  /** @type {IFailedAttendance[]} */
  const failedAttendance = props.attendanceData
    .map(attendance => {
      return attendance.status.map((att, i) => {
        if (!att && !isToday(attendance.date)) {
          /** @type {IFailedAttendance} */
          return {
            date: attendance.date,
            isMorning: i === 0
          }
        }
      })
    }).flat().filter(att => att !== undefined);

  const [currentDate, setCurrentDate] = useState(new Date());

  /**
   * @example
   * "2024年5月29日水曜日"
   */
  const today = Intl.DateTimeFormat("ja-JP", { dateStyle: "full" }).format(currentDate)
  /**
   * @example
   * ["2024年", "5月29日", "水曜日"]
   */
  const todayStr = [
    `${new Date().getFullYear()}年`,
    today.match(/\d+月\d+日/)?.[0],
    today.match(/.曜日$/)?.[0]
  ]

  /** @type {[string, string]} */
  const schedule = props.schedule
    .find(s => s.date.toDateString() === currentDate.toDateString())
    ?.scheduleName ?? ["不明", "不明"]


  /** @type {TAttendance} */
  const targetDayAttendance = props.attendanceData
    .find(att => att.date.toDateString() === currentDate.toDateString())
    ?.status ?? [false, false];

  /** @type {TAttendance} */
  const todayAttendance = props.attendanceData
    .find(att => att.date.toDateString() === new Date().toDateString())
    ?.status ?? [false, false];


  // today 8:30
  const attendBorder = [
    dayjs().hour(9).minute(30).second(0).millisecond(0),
    dayjs().hour(13).minute(0).second(0).millisecond(0),
    dayjs().hour(18).minute(30).second(0).millisecond(0)
  ]

  // 0: 9:30-13:00
  // 1: 13:00-18:30
  // -1: else
  const attendancePeriod = dayjs().isBetween(attendBorder[0], attendBorder[1])
    ? 0
    : dayjs().isBetween(attendBorder[1], attendBorder[2])
      ? 1
      : -1;

  const attendable = isToday(currentDate) && attendancePeriod !== -1 && !todayAttendance[attendancePeriod];

  return (
    <div className="">
      {/* <Header title="LMS" links={{
        Report: "/report",
        result: "/result",
        thoughts: "/thoughts"
      }} /> */}
      <div className="flex flex-col gap-2 mx-8 my-4">
        {/* WarningContainer */}
        {failedAttendance.length !== 0 && (
          <div className="flex flex-col gap-2">
            {failedAttendance.map((att, i) => (
              <Warning
                key={i}
                title="出席登録がされていない授業があります"
                subtitle={att.date.toLocaleDateString()}
                description={att.isMorning ? "午前" : "午後"}
              />
            ))}
          </div>
        )}
        <div className="flex flex-row gap-4 border border-slate-500 px-12 py-4 rounded-md items-center">
          <div className="flex flex-col gap-2 flex-grow">
            {/* 日付 */}
            <div className="flex flex-col">
              <h2 className="text-xl">
                {todayStr[0]}
              </h2>
              <div className="flex flex-row gap-1 items-end">
                <h1 className="text-2xl font-bold">
                  {todayStr[1]}
                </h1>
                <h3 className="text-lg">
                  {todayStr[2]}
                </h3>
              </div>
            </div>
            {/* 授業予定 */}
            <div className="flex flex-col">
              <span>本日の授業</span>
              <div className="flex flex-row gap-4 items-end">
                <span>午前</span>
                <span className="text-2xl font-bold">
                  {schedule[0]}
                </span>
              </div>
              <div className="flex flex-row gap-4 items-end">
                <span>午後</span>
                <span className="text-2xl font-bold">
                  {schedule[1]}
                </span>
              </div>
            </div>
            {/* 出席とリンク */}
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => {
                  props.onAttend?.();
                }}
                className={`${attendable ? "cursor-pointer" : "cursor-not-allowed"}`}
                variant={
                  attendable
                    ? "primary"
                    : "disabled"
                }
              >
                {
                  isToday(currentDate)
                    ? attendancePeriod === -1
                      ? "出席時間外"
                      : todayAttendance[attendancePeriod]
                        ? "出席済み"
                        : "出席する"
                    : targetDayAttendance.every(att => att)
                      ? "出席済み"
                      : targetDayAttendance.every(att => !att)
                        ? "未出席"
                        : targetDayAttendance[1]
                          ? "午前未出席"
                          : "午後未出席"
                }
              </Button>
              <Button
                element="link"
                variant="secondary"
                href="/text"
                className="text-center"
              >
                テキスト
              </Button>
            </div>
          </div>
          <Calendar
            status={props.attendanceData}
            targetDate={new Date()}
            onChange={date => setCurrentDate(date)}
            className="gap-0"
          />
        </div>

        {/* 日報 */}
        <div className="flex flex-col gap-4 p-4 border rounded-md">
          <span className="text-slate-600">日報</span>
          {/* <props.dailyReportForm/> */}
          {/* {props.dailyReportForm} */}
          {props.children}
        </div>

        {/* 感想シート */}
        <div className="flex flex-col gap-2 justify-center p-4 border rounded-md">
          <span className="text-slate-600">
            感想シート
          </span>
          <div className="flex flex-row gap-8 justify-center overflow-x-scroll hidden-scrollbar">
            <ReviewForm
              dateStr=""
              indexStr=""
              instructorName=""
              className="border rounded-md p-4"
            />
            <ReviewForm
              dateStr=""
              indexStr=""
              instructorName=""
              className="border rounded-md p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
