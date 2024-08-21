import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Error from "./components/Error";
import Nav from "./components/21-8/nav";
import Counter from "./components/21-8/counter";
function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</div>
	);
}

export default App;
