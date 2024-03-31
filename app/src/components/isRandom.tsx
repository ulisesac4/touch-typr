"use client";

import { useState } from "react";

export default function IsRandom() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="m-1">
      Is it a random session?{" "}
      <input
        type="checkbox"
        className="toggle"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
    </div>
  );
}
