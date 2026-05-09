import type { ChangeEvent, KeyboardEvent, ReactNode, RefObject } from "react";

export interface EVSelectProps<T = Record<string, any>> {
  options: T[];
  onRenderItem?: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  keyName: keyof T;
  fieldsToSearch?: (keyof T)[];
  delay?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (item: T) => void;
  label?: string;
  onSearch?: (value: string) => void;
  disableInternalFilter?: boolean;
  className?: string;
  labelClassName?: string;
}

export interface EVControlProps<T> {
  placeholder?: string;
  typing?: boolean;
  value?: string;
  label?: string;
  isDebouncing?: boolean;
  className?: string;
  labelClassName?: string;
  controlRef?: RefObject<HTMLInputElement | null>;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export interface EVListOptionsProps<T> extends EVSelectProps<T> {
  onItemSelect?: (item: T) => void;
  open?: boolean;
  listRef?: RefObject<HTMLUListElement | null>;
  highlightedIndex?: number;
}
