import React, { useState } from 'react';
import './TestStart.css';

export function TestStart(props) {
  const [testReturned, setTestReturned] = useState(false);
  const handleTestReturn = () => {
    setTestReturned(true);
    props.onTestReturned?.()
  };

  const [testStarted, setTestStarted] = useState(false);
  const handleStartTest = () => {
    setTestStarted(true);
    props.onTestStarted?.()
  };

  //const titles = ["ホームページA第1回", "ホームページA第2回", "ホームページA第3回"];
  //const [titleIndex, setTitleIndex] = useState(0);

  return (
    <div className="TestStart">
      <header className='TestStart-header'>
        <h1>{props.title}</h1>

        <table>
          <tbody>
            {props.examData.map((exam) => (
              <React.Fragment key={exam.id}>
                <tr>
                  <td>問題数</td>
                  <td>{exam.questions}</td>
                </tr>
                <tr>
                  <td>制限時間</td>
                  <td>{exam.timeLimit}</td>
                </tr>
                <tr>
                  <td>合格に必要な正答率</td>
                  <td>{exam.passPercentage}</td>
                </tr>
                <tr>
                  <td>再受験までの時間</td>
                  <td>{exam.retakeTime}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <div className="button-container">
          {!testReturned ? (
            <button className="button-return" onClick={handleTestReturn}>試験選択へ戻る</button>
          ) : (
            <p>試験選択へ戻る</p>
          )}

          {!testStarted ? (
            <button className="button-start" onClick={handleStartTest}>試験を開始する</button>
          ) : (
            <p>試験を開始</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default TestStart;




// /**
//  * @param {{
//  * }} props 
//  */
// export function TestStart(props) {
//   return (
//     <div>
//       TestStart component
//     </div>
//   );
// }
