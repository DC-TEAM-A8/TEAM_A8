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
    <div className={`${props.className ?? ""}`}>
      <h2 className="text-xl">教科書一覧</h2>
      <div className="grid grid-cols-2 gap-4 w-72">
        {props.subjects.map((subject, index) => (
            <Button 
              key={index}
              href={subject.link}
              variant="primary"
              className="text-center"
            >
              {subject.name}
            </Button>
        ))}
      </div>
    </div>
  );
}
