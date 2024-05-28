/**
 * @param {{
*    today: String
* }} props 
*/

//Date型（または特定フォーマットの日付(YYYY-mm-dd)）
//を引数に渡すとその日付を表示するコンポーネント
//空にするか無効な文字列だと今日の日付になる
export function TopDate(props) {
  const now = new Date(props.today)
  const date = isNaN(now) ? new Date() : now;

  const getYear = () => {
    const year = date.getFullYear();
    return year;
  }
  const shapeOther = () => {
    const setting = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short'
    };
    const today = date.toLocaleDateString('ja-JP', setting);
    const monthDayWeekday = today.replace(/\d{4}年/, '');
    return monthDayWeekday;
  };

  //年と月&日&曜日は別に表示
  
  return (
    <div>
      <p>{getYear()}年</p>
      <p>{shapeOther()}</p>
    </div>
  );
}

