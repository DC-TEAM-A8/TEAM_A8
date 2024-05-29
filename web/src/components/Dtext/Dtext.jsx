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
 * @property {ISubject[] } materials
 * 
 * @param { IDtextProps } props
 */
export function Dtext(props) {
  return (
    <div className={`${props.className ?? ""}`}>
      <h1 className="text-xl mb-8 text-left">教科書一覧</h1>
      <div className="grid grid-cols-2 gap-4 gap-x-16 w-100 mb-8">
        {props.subjects.map((subject, index) => (
            <Button 
              key={index}
              href={subject.link}
              variant="primary"
              className={`text-center ${index < 2 ? "mb-8" : ""}`}
            >
              {subject.name}
            </Button>
        ))}
      </div>

      <h1 className="text-xl text-left mb-4">研修資材</h1>
      <div className="grid grid-cols-1 gap-4 gap-x-16 w-100 mb-2">
        {props.materials.map((material, index) => (
          <a
            key={index}
            href={material.link}
            className="text-left block p-2  text-blue-500 rounded"
          >
            {material.name}
          </a>
        ))}

      </div>
    </div>
  );
}
