import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
} from "react";
export interface EVSelectBase<T> {
  options: T[];
  onRenderItem?: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  keyName: keyof T;
  delay?: number;
}
export interface EVSelectProps<T = Record<string, any>>
  extends
    EVSelectBase<T>,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  onChangeText?: (value: string) => void;
}

export interface EVControlProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  delay?: number;
}

export interface EVListOptionsProps<T> extends EVSelectBase<T> {
  onItemSelect?: (item: T) => void;
  open?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  listRef?: RefObject;
  highlightedIndex?: number;
}
