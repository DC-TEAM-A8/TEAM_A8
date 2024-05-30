"use client"

import React, { Fragment, useState } from "react";

/**
 * @typedef {object} IReviewFormRankInputProps
 * @property {string} [className]
 * @property {string} [name]
 * @property {string} title
 * @property {(rank: number) => void} [onChange]
 * @param { IReviewFormRankInputProps } props
 */
export function ReviewFormRankInput(props) {
  const [currentRank, setCurrentRank] = useState(3)
  return (
    <div className="flex">
      <p className="w-48 flex items-center">{props.title}</p>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((rank) => (
          <Fragment key={rank}>
            <label
              className={`text-xl p-1 select-none ${rank <= currentRank ? 'text-yellow-400' : 'text-gray-300'}`}
              htmlFor={`${props.name}-${rank}`}
            >
              <input
                type="radio"
                name={props.name}
                id={`${props.name}-${rank}`}
                value={rank}
                onClick={() => {
                  setCurrentRank(rank)
                  props.onChange?.(rank)
                }}
                className="size-0 opacity-0" // Add the "hidden" class to hide the radio button
                defaultChecked={rank === currentRank}
                required
              />
              ★
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
