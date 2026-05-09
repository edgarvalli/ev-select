import { useEffect, useMemo, useState } from "react";
import type { EVSelectProps } from "./types";
import { EVControl } from "./ev-control";
import { EVListOptions } from "./ev-list-options";

export function EVSelect<T>(props: EVSelectProps<T>) {
  const [value, setValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<T | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredOptions.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();

        if (!open) setOpen(true);

        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0,
        );
        break;

      case "ArrowUp":
        e.preventDefault();

        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1,
        );
        break;

      case "Enter":
        e.preventDefault();

        if (highlightedIndex >= 0) {
          const item = filteredOptions[highlightedIndex];
          setItemSelected(item);
          setOpen(false);
        }

        break;

      case "Escape":
        setOpen(false);
        break;
    }
  };

  const filteredOptions = useMemo(() => {
    if (props.disableInternalFilter) {
      return props.options;
    }
    if (!value) return props.options;

    const val = value.toLowerCase();

    return props.options.filter((option) => {
      if (props.fieldsToSearch) {
        let exists = false;
        for (const field of props.fieldsToSearch) {
          exists = String(option[field]).toLowerCase().includes(val);
          if (exists) break;
        }
        return exists;
      }

      return String(option[props.keyName]).toLowerCase().includes(val);
    });
  }, [value, props.options, props.disableInternalFilter]);

  const handleFocus = () => {
    setOpen(true);
    props.onFocus?.();
  };

  const handleBlur = () => {
    setOpen(false);
    props.onBlur?.();
  };

  useEffect(() => {
    if (!value) {
      setIsDebouncing(false);
      return;
    }

    setIsDebouncing(true);

    const t = setTimeout(() => {
      props.onSearch?.(value);
      setIsDebouncing(false);
    }, props.delay ?? 500);

    return () => clearTimeout(t);
  }, [value, props.delay]);

  useEffect(() => {
    if (itemSelected) {
      setValue("");
      props.onChange?.(itemSelected);
    }
  }, [itemSelected]);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [value]);

  return (
    <div className="ev-select">
      <EVControl<T>
        {...props}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={itemSelected ? String(itemSelected[props.keyName]) : ""}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
        isDebouncing={isDebouncing}
      />
      <EVListOptions<T>
        {...props}
        open={open}
        options={filteredOptions}
        onFocus={handleFocus}
        onBlur={handleBlur}
        highlightedIndex={highlightedIndex}
        onItemSelect={(item) => setItemSelected(item)}
      />
    </div>
  );
}
