"use server"

import "./DailyReportForm.css";
import { Button } from "../../../Button/Button";
import { SubmitButton } from "./button"

/**
 * @typedef {object} IDailyReportFormProps
 * @property {Function} [onSubmit]
 * @property {Function} [action]
 * @extends {React.HTMLProps<HTMLFormElement>}
 */
/**
 * @param {IDailyReportFormProps} props
 */
export async function DailyReportForm(props) {
  "use server"
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   try {
  //     const response = await fetch('http://localhost:8080/dailyReports/save', {
  //       method: 'POST',
  //       body: formData
  //     });
  //   } catch (error) {
  //     console.error('ポストエラー:', error);
  //   }
  // };
  return (
    <>
      <form className="form" id="myForm" {...props}>
        <div>
          <label htmlFor="title">
            題名
            <span style={{ color: "red" }}>
              ※必須
            </span>
          </label>
          <input type="text" name="title" id="title" className="input" required />
        </div>
        <div>
          <label htmlFor="content">
            本文
            <span style={{ color: "red" }}>
              ※必須
            </span>
          </label>
          <textarea
            className="textarea"
            placeholder="日報の内容を入力してください"
            id="content"
            name="content"
            rows={10}
            cols={50}
            required
          />
        </div>
        <br />
        {/* <Button element="inputSubmit" className="submitButton">送信</Button> */}
        <SubmitButton />
      </form>
    </>
  );
}