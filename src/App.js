import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Payments from './Payment';

function App() {
  return (
    <div className="App">
     <Router>
  <Routes>
  <Route exact path="/" element={<Payments/>} />
    {/* <Route exact path="page1" element={<Page1 />} />
    <Route exact path="page2" element={<Page2 />} />
    <Route exact path="page3" element={<Page3 />} /> */}
  </Routes>
</Router>
    </div>
  );
}

export default App;
