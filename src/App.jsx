import "./App.css";
import Ref from "./components/Ref";
import StateFrom from "./components/stateFrom";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from submited", e.target.name.value);
    console.log("from submited", e.target.email.value);
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
      <input type="text" name='name'/>
      <br />
      <input type="text" name='email'/>
      <button type='submit'>submit</button>
     </form> */}

      {/* <StateFrom /> */}
      <Ref />
    </>
  );
}

export default App;
