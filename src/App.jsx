import "./App.css";
import Ref from "./components/Ref";
import ReusableForm from "./components/ReusableForm";
import HookFrom from "./components/hookFrom";
import StateFrom from "./components/stateFrom";

function App() {
  const handleSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
    // console.log("from submited", e.target.name.value);
    // console.log("from submited", e.target.email.value);
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
      {/* <Ref /> */}
      {/* <HookFrom /> */}
      <ReusableForm handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
