import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Verify from "./container/Verify/Verify";
import Signup from "./container/SignUp/Signup";

function App() {
    return (
        <Router>

            <div className="App">
                <Route path="/" exact>
                    <h1>Accounts</h1>
                </Route>
                <Route path="/users/verify">
                    <Verify/>
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </div>
        </Router>

    );
}

export default App;
