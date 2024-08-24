import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Error from "./components/Error";
import Nav from "./components/21-8/nav";
import Counter from "./components/21-8/counter";
import UseEffect1 from "./components/23-8/useEffect-1";
import UseEffect2 from "./components/23-8/useEffect-2";
import UseEffect3 from "./components/23-8/useEffect-3";
import UseEffect4 from "./components/23-8/useEffect-4";
function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/useEffect1" element={<UseEffect1 />} />
				<Route path="/useEffect2" element={<UseEffect2 />} />
				<Route path="/useEffect3" element={<UseEffect3 />} />
				<Route path="/useEffect4" element={<UseEffect4 />} />
			</Routes>
		</div>
	);
}

export default App;
