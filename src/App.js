import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './custom.css'

let name = "harry";

function App() {
  return (
    <>
      <Navbar title='TextUtils' firstlink='About' ></Navbar>
      <TextForm heading="Enter Text here"></TextForm>
    </>
  );
}

export default App;
