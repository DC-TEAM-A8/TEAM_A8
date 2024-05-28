import React, { useState } from 'react';
import './TestSubjectSelect.css'; 

const TestSubjectSelect = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [maxSessions, setMaxSessions] = useState(0);

  const handleClick = (subject, sessions) => {
    setSelectedSubject(subject);
    setMaxSessions(sessions);
  };

  const subjects = [
    { name: 'ホームページA', sessions: 4 },
    { name: 'ホームページB', sessions: 4 },
    { name: 'ホームページC', sessions: 4 },
    { name: 'JavaScript', sessions: 8 },
    { name: 'データベース', sessions: 4 },
    { name: 'Git', sessions: 4 },
    { name: 'JavaA', sessions: 6 },
    { name: 'ITリテラシー', sessions: 4 },
    { name: 'ビジネスマナー(法人)', sessions: 1 },
    { name: 'システム設計基礎(法人)', sessions: 3 }
  ];

  return (
    <div>
      <h1>試験科目</h1>
      <div className="subject-buttons">
        {subjects.map(subject => (
          <button key={subject.name} onClick={() => handleClick(subject.name, subject.sessions)}>
            {subject.name}
          </button>
        ))}
      </div>

      {selectedSubject && (
        <div className="subject-details">
          <h2>{selectedSubject}</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>制限時間</th>
                <th>合格基準</th>
                <th>あなたの最高スコア</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: maxSessions }, (_, i) => (
                <tr key={i}>
                  <td>第{i + 1}回</td>
                  <td><button className="apply-button">受験する</button></td>
                  <td>10分</td>
                  <td>70%以上</td>
                  <td>-</td>
                </tr>
              ))}
                <tr>
                  <td>本試験</td>
                  <td><button className="apply-button">受験する</button></td>
                  <td>30分</td>
                  <td>70%以上</td>
                  <td>-</td>
                </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TestSubjectSelect;
