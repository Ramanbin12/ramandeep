import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
function App() {

  return (
    <>
   <Greet name="bruce" heroName="Batsman" ><p>this is a children props</p></Greet>
   {/* <Greet name="clark" heroName="Supername"><button>Action</button></Greet>
   <Greet name="Diana" heroName="Wondr woman"/> */}
   <Welcome name="raman"/>
   <Counter/>
   <Message/>
   </>
  );
}

export default App;
