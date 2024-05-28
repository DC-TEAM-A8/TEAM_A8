
export function DailyReportDeleteComfirm(props) { 
  const handleDelete = ()=>{
    props.onDelete();
  }
  const handleCancel = ()=>{
    props.onCancel();
  }
  return (
    <div>
      <h1>確認</h1>
      <p>{props.title}を削除してもよろしいですか？</p>
      <form>
      <button onClick={handleDelete} 
        style={{
          width : "100%",
          height: "30px",
          color: 'white',
          backgroundColor: 'red',
          border: "none", 
          borderRadius: "7px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          padding:"10px",
        }}>削除</button>
        <br/>
      <a href="#" onClick={handleCancel}
        style={{
          display: "block",
          margin: "auto",
          color: "blue",
          textAlign:"center",
          padding:"10px",
        }}>キャンセル</a>
      </form>
    </div>
  );
}
