import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
			</Switch>
		</Router>
	);
}

export default App;
