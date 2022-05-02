/**
 * This function takes in a ButtonProps object and returns a button element with
 * the className of button and the props that were passed in.
 * @param {ButtonProps} props - ButtonProps
 * @returns A button element with the className of button and the props of the
 * button element.
 */
import { ButtonHTMLAttributes } from "react";





/**
 * This function takes a button props object and returns a button element with the
 * className of button and the props passed in.
 * 
 * Args:
 *   props (ButtonProps): ButtonProps
 * 
 * Returns:
 *   A button element with the className of "button" and the props of the button
 * element.
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {

  return (
    <button className="button" {...props} />
  );
}