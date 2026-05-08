import type { EVListOptionsProps } from "./types";

export function EVListOptions<T>(props: EVListOptionsProps<T>) {
  const renderList = props.options?.map((option, index) => {
    return (
      <li
        key={props.keyExtractor(option)}
        onClick={() => props.onItemSelect?.(option)}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        className={index === props.highlightedIndex ? "active" : ""}
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
      className={`ev-select-options ${props.open ? "open" : ""}`}
      onMouseOver={props.onFocus}
      onMouseLeave={props.onBlur}
    >
      <ul ref={props.listRef} tabIndex={0}>
        {renderList}
      </ul>
    </div>
  );
}
