import { useState } from "react";

const StateFrom = () => {
  const [email, setEmail] = useState(null);
  const handleSubmit = (e) => {};
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input onChange={handleEmail} type="text" name="email" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default StateFrom;
