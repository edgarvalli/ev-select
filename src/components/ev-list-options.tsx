import React from "react";
import type { EVListOptionsProps } from "./types";

export function EVListOptions<T>(props: EVListOptionsProps<T>) {
  const renderList = props.options.map((option, index) => {
    return (
      <li
        key={props.keyExtractor(option)}
        onMouseDown={(e: React.MouseEvent<HTMLLIElement>) => {
          e.preventDefault();
          props.onItemSelect?.(option);
        }}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        className={`ev-select__option ${index === props.highlightedIndex ? "ev-select__option--active" : ""}`}
      >
        {props.onRenderItem ? (
          props.onRenderItem(option)
        ) : (
          <span>{String(option[props.keyName])}</span>
        )}
      </li>
    );
  });

  return (
    <div
      className={`ev-select__options ${props.open ? "ev-select__options--open" : ""}`}
      onMouseOver={props.onFocus}
      onMouseLeave={props.onBlur}
    >
      <ul ref={props.listRef} tabIndex={0} className="ev-select__list">
        {renderList}
      </ul>
    </div>
  );
}
