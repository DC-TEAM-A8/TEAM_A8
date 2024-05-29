import React from 'react';
import {Button} from '../Button';

/**
 * @typedef {object} ISubject
 * @property {string} name
 * @property {string} link
 */

/**
 * @typedef {object} IDtextSelectProps
 * @property {string} [className]
 * @property {ISubject[] } materials
 * @property {ISubject[] } subjects
 * @param { IDtextSelectProps } props
 */
export function DtextSelect(props) {
  return (
    <div className={`${props.className ?? ""} px-24 py-4`}>
      <h1 className="text-xl text-left mb-4 ">目次</h1>
      <div className="grid gap-4 gap-x-16 w-100 mb-4">
        {props.materials.map((material,index) => (
          <a
            key={index}
            href={material.link}
            className="text-left block p-2 text-blue-500 rounded"
          >
            {material.name}
          </a>
        ))}
      </div>
      
      <h1 className="text-xl text-left mt-16 mb-4 ">lesson素材ダウンロード</h1>

      <div className="bg-gray-200 p-4 rounded-lg">
      <h1 className="text-xl mb-4">科目名</h1>
        <div className="grid grid-cols-3 gap-1 gap-x-4 w-100">
        {props.subjects.map((subject,index) => (
          <Button
            key={index}
            href={subject.link}
            variant="primary"
            className={"text-center "}
            >
              {subject.name}
          </Button>

        ))}
      </div>
      </div>
    </div>
  );
}
