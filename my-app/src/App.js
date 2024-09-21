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
import UseParams from "./components/24-8/useParams";
import PropDrilling from "./components/24-8/PropDrilling";
import { useState } from "react";
import Mapping from "./components/24-8/mapping";
import Mapping2 from "./components/24-8/mapping2";
import Todo from "./components/25-8/todo";
import DynamicStyle from "./components/29-8/DynamicStyle";
import Register from "./components/29-8/Register";
import RegistrationValidation from "./components/31-8/registrationVlidation";
import UseEffectRegistration from "./components/31-8/UseEffectRegistration";
import Reducer from "./components/1-9/reducer";
import NewLogin from "./components/5-9/NewLogin";
import Product from "./components/14-9/Product";
import UseReference from "./components/15-9/UseReference";
import ReduxCounter from "./components/19-9/ReduxCounter";
function App() {
	const [counter, setCounter] = useState(0);
	const [students, setStudent] = useState([
		"Purva",
		"Vinay",
		"Manav",
		"aman",
		"Chandana",
	]);
	function inc() {
		setCounter(counter + 1);
	}
	function dec() {
		setCounter(counter - 1);
	}
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
				<Route path="/useParams/:id" element={<UseParams />} />
				<Route
					path="/propDrilling"
					element={
						<PropDrilling
							students={["ali", "swaraj", "awdiz"]}
							isCompleted={true}
							counter={counter}
							inc={inc}
							dec={dec}
						/>
					}
				/>
				<Route
					path="/mapping"
					element={<Mapping students={students} setStudent={setStudent} />}
				/>
				<Route path="/mapping2" element={<Mapping2 />} />
				<Route path="/todo" element={<Todo />} />
				<Route path="/dynamicStyle" element={<DynamicStyle />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/registrationValidation"
					element={<RegistrationValidation />}
				/>
				<Route
					path="/useEffectRegistration"
					element={<UseEffectRegistration />}
				/>
				<Route path="/reducer" element={<Reducer />} />
				<Route path="/newLogin" element={<NewLogin />} />
				<Route path="/product" element={<Product />} />
				<Route path="/useReference" element={<UseReference />} />
				<Route path="/reduxcounter" element={<ReduxCounter />} />
			</Routes>
		</div>
	);
}

export default App;
