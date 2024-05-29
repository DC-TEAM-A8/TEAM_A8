import React from "react";
import { Button } from "../Button/Button";

/**
 * @typedef {object} IReviewFormProps
 * @extends {React.HTMLProps<HTMLFormElement>}
 * @property {string} [className]
 * @property {string} [titlePlaceholder]
 * @property {string} [contentPlaceholder]
 * @param { IReviewFormProps } props
 */
export function OldDailyReportForm(props) {
  return (
    <form
      className={`flex flex-col gap-2 min-w-64 w-[30rem] max-w-[60rem] ${props.className || ""}`}
      {...props}
    >
      <label htmlFor="title" className="flex flex-row gap-2 items-end">
        <span>題名</span>
        <span className="text-red-500 text-sm">必須</span>
      </label>
      <input
        type="text"
        name="title"
        placeholder={props.titlePlaceholder ?? "5/1（月）　日報"}
        className="p-2 rounded-sm w-full border border-transparent border-b-slate-500 focus:border-slate-500 outline-none box-border transition-[border]"
        data-testid="review-form-title"
      />
      <label htmlFor="content" className="flex flex-row gap-2 items-end">
        <span>本文</span>
        <span className="text-red-500 text-sm">必須</span>
      </label>
      <textarea
        className="w-full p-2 min-h-48 rounded-sm outline-none border border-transparent border-b-slate-500 focus:border-slate-500 box-border resize-none transition-[border]"
        name="content"
        placeholder={props.contentPlaceholder ?? "日報本文を記入"}
        data-testid="review-form-content"
      />
      <Button
        element="inputSubmit"
        variant="primary"
        className="outline-none w-full border-4 border-transparent focus:border-blue-600 box-border transition-[border]"
        data-testid="review-form-submit"
      />
    </form>
  );
}
