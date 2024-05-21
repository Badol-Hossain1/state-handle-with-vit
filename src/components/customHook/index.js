import { useState } from "react";

const useInputState = (defaultValue = "") => {
  const [inputValue, setInputValue] = useState(defaultValue);
  //   const handleChange = (e) => {
  //     setInputValue(e.target.value);
  //   };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  //   return [inputValue, handleChange];
  return { inputValue, onChange };
};

export default useInputState;
