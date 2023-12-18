import "./App.css"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
