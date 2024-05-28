import React from "react";

/**
 * @typedef { "primary" | "secondary" | "disabled" } TButtonVariant
 * @typedef { "button" | "inputButton" | "inputSubmit" | "link" } TButtonElement
 */
/**
 * @typedef { object } IButtonProps
 * @property { TButtonVariant } [variant]
 * @property { string } [className]
 * @property { TButtonElement } [element]
 * @property { import("react").ReactNode } [children]
 * @property { string } [href]
 * @property { () => void } [onClick]
 */

/**
 * @type { IButtonProps }
 */
const defaultProps = {
  variant: "primary",
  element: "button",
  href: undefined,
  children: undefined,
};

/**
 * @param { IButtonProps } propsArg
 */
export function Button(propsArg) {
  const props = { ...defaultProps, ...propsArg };
  const Element = props.href
    ? (props) => <a {...props} />
    : props.element === "button"
      ? (props) => <button {...props} />
      : (props) => <input {...props} />;
  return (
    <Element
    {...propsArg}
    className={`px-4 py-3 rounded-md ${
      (props.href || props.element.match(/^input/) ) ? "cursor-pointer select-none" : ""
    } ${
      props.variant === "primary" ? "bg-blue-500 text-white" :
      props.variant === "secondary" ? "border border-blue-500 bg-white text-blue-500" :
      props.variant === "disabled" ? "bg-gray-500 text-white" :
      ""
    } ${props.className}`}
    onClick={props.onClick ? () => props.onClick?.() : undefined}
    href={props.href}
    type={
      props.element === "inputButton"
      ? "button"
      : props.element === "inputSubmit"
      ? "submit"
      : undefined
    }
    value={props.element.match(/^input/) ? props.children : undefined}
    >
      {!props.element.match(/^input/) ? props.children : undefined}
    </Element>
  );
}
