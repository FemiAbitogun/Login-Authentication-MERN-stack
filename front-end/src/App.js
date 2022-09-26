import './css/App.css';
import './css/Utils.css'
import './css/RegisterStyle.css'
import './css/Home.css'
import './css/Dashboard.css'
import './css/Navber.css'
import axios from "axios";
import Router from './Route';


axios.defaults.withCredentials=true;

function App() {
  return (
    <div className="App">
        <Router />
    </div>
  );
}
export default App;




