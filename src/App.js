import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Payments from './Payment';
import LinkExpired from './pages/expired';

function App() {
  return (
    <div className="App">
     <Router>
  <Routes>
  <Route exact path="/" element={<Payments/>} />
    <Route exact path="expired" element={<LinkExpired />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
