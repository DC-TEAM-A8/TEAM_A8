import React from "react";
/**
 * @typedef {"info" | "warning"} IWarningVariant
 */
/**
 * @typedef {object} IWarningProps
 * @property {string} [className]
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} [href]
 * @property {() => void} [onClick]
 * @property {IWarningVariant} [variant]
 * @type { IWarningProps }
 */
const defaultProps = {
  variant: "warning",
  href: "#"
}
/**
 * @param { IWarningProps } propsArg
 */
export function Warning(propsArg) {
  const props = { ...defaultProps, ...propsArg }
  return (
    <a
      className={`w-full border-2 border-slate-800 relative px-8 py-4 before:absolute before:w-4 before:inset-0 before:bg-red-500 flex flex-col gap-2 select-none hover:bg-slate-100 transition-[background-color] ${props.className ?? ""}`}
      href={props.href}
      onClick={props.onClick}
    >
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="text-sm">{props.subtitle}</p>
        <p className="text-sm">{props.description}</p>
    </a>
  );
}
