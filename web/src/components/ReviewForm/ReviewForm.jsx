import React from "react";
import { ReviewFormRankInput } from "../ReviewFormRankInput"
import { Button } from "../Button"

/**
 * @typedef {object} IReviewFormProps
 * @extends {React.HTMLAttributes<HTMLFormElement>}
 * @property {string} [className]
 * @property {string} dateStr 日時 ( 2024-05-24(金) 10:00:00 - 12:30:00 など)
 * @property {string} indexStr 回数 ( 第1回 など)
 * @property {string} instructorName 講師名
 * 
 * @param { IReviewFormProps } props
 */
export function ReviewForm(props) {
  return (
    <form
      {...props}
      className={`flex flex-col gap-1 ${props.className}`}
    >
      <p className="">
        {props.dateStr}
      </p>
      <p className="">
        {props.indexStr}
      </p>
      <div className="flex gap-4">
        <div className=" bg-gray-300 rounded-full size-12 my-auto" />
        <div className="flex flex-col gap-2">
          <p className="text-sm">インストラクター</p>
          <p className="text-lg">{props.instructorName}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 m-2">
        <ReviewFormRankInput title="講師評価" name="rank1" />
        <ReviewFormRankInput title="受講内容" name="rank2" />
        <ReviewFormRankInput title="テキスト" name="rank3" />
      </div>

      <label
        htmlFor="review-comment"
        className="flex flex-col gap-2"
      >
        <span>
          コメント
        </span>
        <textarea
          id="review-comment"
          name="comment"
          className="outline-none border-2 border-slate-300 focus:border-slate-700 box-border resize-none h-36 w-full transition-[border]"
        />
      </label>

      <Button
        element="inputSubmit"
      />
    </form>
  );
}
