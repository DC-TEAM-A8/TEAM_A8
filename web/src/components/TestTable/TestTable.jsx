import { Button } from "../Button";
import "./TestTable.css"

/**
 * @typedef {object} ITest
 * @property {string} name
 * @property {string} url
 * @property {string} time
 * @property {number} passing_score
 * @property {number} max_score
 */

/**
 * @typedef {object} ITestTableProps
 * @property {string} [className]
 * @property {ITest[]} tests
 * @param { ITestTableProps } props
 */
export function TestTable(props) {
  props.tests

  return (
    <table>
      <thead className="TestTableThead">
        <tr>
          <th>科目</th>
          <th>受験</th>
          <th>制限時間</th>
          <th>合格基準</th>
          <th>あなたの最高スコア</th>
        </tr>
      </thead>
      <tbody>
        {props.tests.map((test, i) => (
          <tr key={i}>
            <th className="TableSubject">{test.name}</th>
            <th><Button href={test.url}>受験する</Button></th>
            <th>{test.time}分</th>
            <th>{test.passing_score}</th>
            <th>{test.max_score}</th>
          </tr>
      ))}
      </tbody>
    </table>
  );
}
