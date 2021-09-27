import "./App.css";
import Header from "./components/Header/Header";
import Store from "./components/Store/Store";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Store></Store>
      </div>
    </>
  );
}

export default App;
