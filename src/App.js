
import './App.css';
import Greet from './Greet';
import Todo from './Todo';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <img src="./images/download.jpeg" alt="" className="image" />

      <Greet />
      <Todo />
    </div>
  );
}

export default App;
