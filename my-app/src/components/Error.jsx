import { useNavigate } from "react-router-dom";
function Error() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};

	return (
		<>
			<h1>page not found</h1>
			<button onClick={handleClick}> Back to Home</button>
		</>
	);
}
export default Error;
