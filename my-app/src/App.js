import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Error from "./components/Error";
function App() {
	return (
		<div>
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				{/* <Route path=""/> */}
			</Routes>
		</div>
	);
}

export default App;
