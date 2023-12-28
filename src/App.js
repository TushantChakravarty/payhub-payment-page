import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Payments from './Payment';
import LinkExpired from './pages/expired';
import SuccessPage from './pages/success';

function App() {
  return (
    <div className="App">
     <Router>
  <Routes>
  <Route exact path="/" element={<Payments/>} />
    <Route exact path="expired" element={<LinkExpired />} />
    <Route exact path="success" element={<SuccessPage/>} />

  </Routes>
</Router>
    </div>
  );
}

export default App;
