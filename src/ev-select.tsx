import { useEffect, useRef, useState } from "react";
import type { EVSelectProps } from "./types";
import { EVControl } from "./ev-control";
import { EVListOptions } from "./ev-list-options";

export default function EVSelect<T = Record<string, any>>(
  props: EVSelectProps<T>,
) {
  const { label, keyExtractor, keyName, options, delay, ...inputProps } = props;

  const [value, setValue] = useState(inputProps.value ?? "");
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<T | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const controlRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!options.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();

        if (!open) setOpen(true);

        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0,
        );
        break;

      case "ArrowUp":
        e.preventDefault();

        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1,
        );
        break;

      case "Enter":
        e.preventDefault();

        if (highlightedIndex >= 0) {
          const item = options[highlightedIndex];
          setItemSelected(item);
          setOpen(false);
        }

        break;

      case "Escape":
        setOpen(false);
        break;
    }
  };

  useEffect(() => {
    const t = setTimeout(() => {
      if (value) {
        props.onChangeText?.(String(value))
      }
    }, delay ?? 500);

    return () => clearTimeout(t);
  }, [value]);

  useEffect(() => {
    setValue("");
  }, [itemSelected]);

  return (
    <div className="ev-select">
      <EVControl
        {...inputProps}
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        placeholder={itemSelected ? String(itemSelected[keyName]) : ""}
        onKeyDown={handleKeyDown}
        ref={controlRef}
        onChange={(e) => setValue(e.target.value)}
      />
      <EVListOptions<T>
        open={open}
        keyName={keyName}
        options={options}
        keyExtractor={keyExtractor}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        highlightedIndex={highlightedIndex}
        onItemSelect={(item) => setItemSelected(item)}
      />
    </div>
  );
}
