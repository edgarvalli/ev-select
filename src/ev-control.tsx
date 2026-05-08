import type { EVControlProps } from "./types";

export function EVControl(props: EVControlProps) {
  return (
    <div className="ev-control">
      <label htmlFor="ev-control">EV Select</label>
      <div className="ev-control-input">
        <input {...props} />
      </div>
    </div>
  );
}
