import React, { useState } from 'react';

const subjects = ["ホームページA", "ホームページB", "ホームページC", "JavaScript", "JavaA", "データベース", "Git", "ITリテラシー", "システム設計基礎"];

export function TestSubjectSelect() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>試験科目</h1>
      <div style={subjectsContainerStyle}>
        {subjects.map(subject => (
          <button key={subject} style={subjectButtonStyle} onClick={() => handleClick(subject)}>
            {subject}
          </button>
        ))}
      </div>
      {selectedSubject && <SubjectDetails subject={selectedSubject} />}
    </div>
  );
}

const SubjectDetails = ({ subject }) => {
  const examDetails = [
    { id: 1, time: "Table Data", criteria: "Table Data", score: "Table Data" },
    { id: 2, time: "Table Data", criteria: "Table Data", score: "Table Data" },
    { id: 3, time: "Table Data", criteria: "Table Data", score: "Table Data" },
    { id: 4, time: "Table Data", criteria: "Table Data", score: "Table Data" },
    { id: 5, time: "Table Data", criteria: "Table Data", score: "Table Data" },
    { id: 6, time: "Table Data", criteria: "Table Data", score: "Table Data" },
    { id: 7, time: "Table Data", criteria: "Table Data", score: "Table Data" },
    { id: 8, time: "Table Data", criteria: "Table Data", score: "Table Data" },
  ];

  return (
    <div style={detailsContainerStyle}>
      <h2>{subject}の詳細</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>科目名</th>
            <th>受験</th>
            <th>制限時間</th>
            <th>合格基準</th>
            <th>あなたの最高スコア</th>
          </tr>
        </thead>
        <tbody>
          {examDetails.map(detail => (
            <tr key={detail.id}>
              <td>{`第${detail.id}回`}</td>
              <td><button style={subjectButtonStyle}>受験する</button></td>
              <td>{detail.time}</td>
              <td>{detail.criteria}</td>
              <td>{detail.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  backgroundColor: '#f0f0f0',
  textAlign: 'center',
};

const headerStyle = {
  backgroundColor: '#bfbfbf',
  padding: '10px',
  fontSize: '24px',
  marginBottom: '20px',
};

const subjectsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  border: '1px solid #000',
  padding: '20px',
  backgroundColor: '#fff',
};

const detailsContainerStyle = {
  marginTop: '20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const subjectButtonStyle = {
  backgroundColor: '#0057ff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default TestSubjectSelect;
