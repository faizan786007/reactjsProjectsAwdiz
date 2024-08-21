import { useNavigate } from "react-router-dom";
function Home() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/login");
	};
	return (
		<>
			<h1>Home</h1>
			<button onClick={handleClick}>login</button>
		</>
	);
}
export default Home;
