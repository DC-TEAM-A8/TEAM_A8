import React, { useState } from 'react';
import './TestResultAndAnswer.css';

export function TestResultAndAnswer(props) {
  const [confirmationtesttopReturned, setConfirmationTestTopReturned] = useState(false);
  const handleConfirmationTestTopReturn = () => {
    setConfirmationTestTopReturned(true);
    props.onConfirmationTestTopReturned?.();
  };

  return (
    <div className="TestResultAndAnswer">
      <header className='TestResultAndAnswer-header'>
        <h1>採点結果</h1>
        <h2>回答おつかれさまでした。</h2>
        <h3>※このスコア画面は閉じると再表示ができません。</h3>

        <table>
          <tbody>
            {props.resultData.map((result) => (
              <React.Fragment key={result.id}>
                <tr>
                  <td>出題数</td>
                  <td>{result.questions}</td>
                </tr>
                <tr>
                  <td>正答数</td>
                  <td>{result.correctanswers}</td>
                </tr>
                <tr>
                  <td>あなたのスコア</td>
                  <td>{result.yourscore}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <div className="button-container">
          {!confirmationtesttopReturned ? (
            <button className="button-return" onClick={handleConfirmationTestTopReturn}>確認テストトップへ</button>
          ) : (
            <p>確認テストトップへ</p>
          )}
        </div>
        <h4>正答確認</h4>
      </header>
    </div>
  );
}

export default TestResultAndAnswer;


// /**
//  * @typedef {object} ITestResultAndAnswerProps
//  * @property {string} [className]
//  * @param { ITestResultAndAnswerProps } props
//  */