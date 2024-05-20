
import './App.css'

function App() {

  const handleSubmit = e => {
    e.preventDefault()
    console.log('from submited',e.target.name.value);
    console.log('from submited',e.target.email.value);

  }


  return (
    <>
     <form onSubmit={handleSubmit}>
      <input type="text" name='name'/>
      <br />
      <input type="text" name='email'/>
      <button type='submit'>submit</button>
     </form>
    </>
  )
}

export default App
