const ReusableForm = ({ handleSubmit }) => {
  const handleSubmits = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    handleSubmit(data);
  };
  return (
    <div>
      <h1>Sign up</h1>
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
