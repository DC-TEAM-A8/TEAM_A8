/**
 * @typedef { "primary" | "secondary" | "disabled" } TButtonVariant
 * @typedef { "button" | "link" } TButtonElement
 */
/**
 * @typedef { object } IButtonProps
 * @property { string } [className]
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
  href: undefined
};

/**
 * @param { IButtonProps } propsArg
 */
export function Button(propsArg) {
  const props = { ...defaultProps, ...propsArg };
  const Element = props.href ? "a" : "button";
  const a = HTMLDivElement;
  return (
    <Element className={`px-4 py-3 rounded-md ${
      props.href ? "cursor-pointer select-none" : ""
    } ${
      props.variant === "primary" ? "bg-blue-500 text-white" :
      props.variant === "secondary" ? "border border-blue-500 bg-white text-blue-500" :
      props.variant === "disabled" ? "bg-gray-500 text-white" :
      ""
    } ${props.className}`}
    onClick={() => props.onClick?.()}
    >
      {props.children}
    </Element>
  );
}
