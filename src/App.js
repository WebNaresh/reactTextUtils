import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './custom.css'


function App() {
  return (
    <>
      <Navbar  title='TextUtils' firstlink='About' ></Navbar>
      <TextForm heading="Enter Text here"></TextForm>
      {/* <About/> */}
    </>
  );
}

export default App;
