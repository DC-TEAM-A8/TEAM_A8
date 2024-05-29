import "./DailyReportForm.css";
import { Button } from "../../../Button/Button";
/**
 * @param {object} props
 * @param {Function} props.onSubmit
 * @extends {React.HTMLProps<HTMLFormElement>}
 */
export function DailyReportForm(props) {
  const homeUrl = "web/src/components/DailyReport/DailyReportHome";
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  };
  return (
      <form className="form" id="myForm" {...props}>
        <div>
          <p >題名 <span style={{color :"red"}}>※必須</span></p>
          <input type="text" className="input" required />
        </div>
        <div>
          <p>本文 <span style={{color :"red"}}>※必須</span></p>
          <textarea className="textarea" placeholder="日報の内容を入力してください"
            rows="10" cols="50" required />
        </div>
        <br/>
        <Button element="inputSubmit" className="submitButton" onClick={handleSubmit}>送信</Button>
      </form>
  );
}
