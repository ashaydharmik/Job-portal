import "./App.css"
import Home from "./components/HomePage/Home";
import JobDetails from "./components/JobDetails/JobDetails";
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
      <Route path="/jobPost" element={<Jobpost/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/jobDetails" element={<JobDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
