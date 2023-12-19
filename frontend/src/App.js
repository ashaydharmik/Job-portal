import "./App.css"
import Jobpost from "./components/JobPosting/Jobpost";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Jobpost/>}/>
     </Routes>
    </div>
  );
}

export default App;
