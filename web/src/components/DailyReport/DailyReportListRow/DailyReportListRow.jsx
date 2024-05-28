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
      justifyContent: 'space-between', // 画面の左端と右端に子要素を配置
      backgroundColor: 'white',
      width: '100%',
      padding : "7px",
    }}>
      {/* タイトル */}
      <span 
      style={{ 
        marginRight: '10px' 
        }}>{title}</span> 
      {/* タイトル */}
      {/* 本文*/}
      <span 
      style={{ 
        flexGrow: 1 
        }}>{text}</span> 
      {/* 本文 */}
      {/* 編集ボタンと削除ボタン*/}
      <div 
      style={{ 
        display: 'flex', 
        gap: '5px' ,
        }}>
        {/* 編集ボタン*/} 
        <button onClick={props.onEdit} 
        style={{
          color: 'white',
          backgroundColor: 'blue',
          border: "none", 
        borderRadius: "7px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}>編集</button>
        {/* 編集ボタン*/}
        {/* 削除ボタン*/}
        <button onClick={props.onDelete} 
        style={{
          color: 'white',
          backgroundColor: 'red',
          border: "none", 
        borderRadius: "7px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}>削除</button>
        {/* 削除ボタン*/}
      </div>
      {/* 編集ボタンと削除ボタン*/}
    </div>
    
  );
}
