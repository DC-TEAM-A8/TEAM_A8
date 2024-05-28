/**
 * @typedef {Object} DailyReportData
 * @property {string} title - レポートのタイトル
 * @property {string} text - レポートの本文
 */
/**
 * @param {Object} props 
 * @param {DailyReportData} props.reportData - レポートのデータ
 * @param {Function} props.onEdit - 編集ボタンがクリックされたときのハンドラ
 * @param {Function} props.onDelete - 削除ボタンがクリックされたときのハンドラ
 */
export function DailyReportListRow(props) {
  const { title, text } = props.reportData;
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center', // タイトルと本文を垂直方向に中央揃え
      backgroundColor: 'white',
      width: '100%',
    }}>
      <span style={{ marginRight: '10px' }}>{title}</span> {/* タイトル */}
      <span style={{ flexGrow: 1 }}>{text}</span> {/* 本文 */}
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}> {/* 編集と削除ボタンを右寄せ */}
        <button onClick={props.onEdit} style={{
          color: 'white',
          backgroundColor: 'blue',
        }}>編集</button>
        <button onClick={props.onDelete} style={{
          color: 'white',
          backgroundColor: 'red',
        }}>削除</button>
      </div>
    </div>
    
  );
}
