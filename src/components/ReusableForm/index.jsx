import { useContext } from "react";
import { Context } from "../../main";

const ReusableForm = ({ handleSubmit, children }) => {
  const handleSubmits = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    handleSubmit(data);
  };

  const data = useContext(Context);
  console.log(data);
  return (
    <div>
      <h1>{children}</h1>
      <form onSubmit={handleSubmits}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ReusableForm;
