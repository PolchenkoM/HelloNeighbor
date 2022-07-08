import { useState } from "react";
import { Rate } from "antd";

export default function Rater() {
  const [value, setValue] = useState(5);

  const handleChange = (value) => {
    setValue((prev) => value);
  };
  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text"></span> : ""}
    </span>
  );
};

