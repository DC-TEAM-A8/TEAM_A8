/**
 * @typedef {boolean} TAttendance
 */
/**
 * @typedef {[TAttendance, TAttendance]} TAttendanceStatus
 */
/**
 * @typedef {object} ICalendarDayProps
 * @property {Date} date 日付
 * @property {boolean} isToday 今日かどうか
 * @property {boolean} isSelected 選択されているかどうか
 * @property {TAttendanceStatus} status 出席状況
 * @property {string} [className]
 * @property {(date: Date) => void} [onClick]
 * @param {ICalendarDayProps} props
 */
const defaultProps = {
  date: new Date(),
  isToday: false,
  status: [true, true],
  className: "",
}

/**
 * @param {ICalendarDayProps} propsArg
 */
export function CalendarDay(propsArg) {
  const props = { ...defaultProps, ...propsArg };
  return (
    <button
      className={`size-8 relative rounded-sm ${props.className || ""}`}
      onClick={() => props.onClick?.(props.date)}
    >
      <div className="flex flex-col size-full">
        {props.status.map((status, i) => (
          <div key={i} className={`w-full h-1/2 ${status ? "bg-blue-200" : "bg-red-200"}`} />
        ))}
      </div>
      <div className={`absolute inset-0 size-full opacity-50 ${
        props.isToday
        ? props.isSelected
          ? "bg-slate-950"
          : "bg-slate-50"
        : props.isSelected
          ? "bg-blue-950"
          : ""
      }`} />
      <p className="absolute inset-0 size-full flex justify-center items-center">
        {props.date.getDate()}
      </p>
    </button>
  );
}
