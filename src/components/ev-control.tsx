import { useId } from "react";
import type { EVControlProps } from "./types";

export function EVControl<T>(props: EVControlProps<T>) {
  const id = useId();

  return (
    <div className="ev-select__control">
      <label htmlFor={id} className="ev-select__label">
        {props.label}
      </label>
      <div className="ev-select__input-wrapper">
        <input
          id={id}
          value={props.value}
          ref={props.controlRef}
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          onChange={props.onChange}
          className="ev-select__input"
        />
        {props.isDebouncing && <span className="ev-select__loader"></span>}
      </div>
    </div>
  );
}
