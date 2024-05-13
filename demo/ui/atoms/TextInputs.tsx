import { Placeholders } from "../../core/configs/configs";
import { ChangeEvent, useState } from "react";
import { isLetter } from "@/core/utils";

const TextInput = ({ onLoginEnter, id }: any) => {
  const [value, setValue] = useState("");
  const maxValueLength = 100;

  const input = {
    placeholders: Placeholders.TEXT_INPUT,
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isLetter(value) && value.length <= maxValueLength) {
      setValue(value);
    }
    onLoginEnter(value);
  };
  return (
    <input
      type="text"
      id={id}
      onChange={onChangeHandler}
      value={value}
      placeholder={input.placeholders}
    />
  );
};
export default TextInput;
