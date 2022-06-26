import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Navbar from "./components/navbar/Navbar";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Input />
    </div>
  );
}

export default App;
