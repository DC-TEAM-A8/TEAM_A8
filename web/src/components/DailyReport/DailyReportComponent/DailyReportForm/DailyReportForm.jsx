/**
 * @param {object} props
 * @param {Function} props.onSubmit
 */
export function DailyReportForm(props) {
  return (
      <div style = {{paddingBottom:"30px"}}>
      <h1>日報</h1>
      <form id="myForm" style ={{width: '100%'}}>
      <div>
      <p>題名</p>
      <input type="text" required/>
      </div>
      <div>
      <p>本文</p>
      <textarea placeholder="日報の内容を入力してください" 
      rows="10" cols="50" required/>
      </div>
      <br></br>
      <button type="submit" id="submitButton" 
      onSubmit = {props.onSubmit}
      style = {{
        width:"100%",
        color: 'white',
        backgroundColor: 'blue',
        border: "none", 
        borderRadius: "7px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}>送信</button>
    </form>
    </div>
  );
}
