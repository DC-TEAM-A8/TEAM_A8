import React from 'react';
import { Button } from '../Button';

/**
 * @typedef {object} ISubject
 * @property {string} name
 * @property {string} link
 */

/**
 * @typedef {object} IDtextProps
 * @property {string} [className]
 * @property { ISubject[] } subjects
 * 
 * @param { IDtextProps } props
 */
export function Dtext(props) {
  return (
    <div className={`bg-red ${props.className ?? ""}`}>
      <h2>教科書一覧</h2>
      <div>
        {props.subjects.map((subject, index) => (
            <Button 
              key={index}
              href={subject.link}
              variant="primary"
              className="w-72"
            >
              {subject.name}
            </Button>
        ))}
      </div>
    </div>
  );
}
