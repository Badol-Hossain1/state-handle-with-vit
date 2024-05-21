import React, { useRef } from "react";

const Ref = () => {
  const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={ref} type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Ref;
