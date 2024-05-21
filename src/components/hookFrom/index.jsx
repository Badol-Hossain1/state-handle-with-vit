import useInputState from "../customHook";

const HookFrom = () => {
  //   const [name, handleNameChange] = useInputState("name");
  const nameState = useInputState();
  const EmailState = useInputState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object", nameState.inputValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          //   value={name}
          //   onChange={handleNameChange}
          {...EmailState}
          type="text"
          name="name"
        />
        <br />
        <input {...nameState} type="text" name="email" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default HookFrom;
