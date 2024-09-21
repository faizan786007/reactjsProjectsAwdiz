import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthContextComponent from "./components/context/AuthContext";
import ColorContextParent from "./components/5-9/Colorcontext";
import { store } from "./components/Redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Toaster
					position="top-center"
					reverseOrder={false}
					gutter={8}
					containerClassName=""
					containerStyle={{}}
					toastOptions={{
						// Define default options
						className: "",
						duration: 5000,
						style: {
							background: "#363636",
							color: "#fff",
						},

						// Default options for specific types
						success: {
							duration: 3000,
							theme: {
								primary: "green",
								secondary: "black",
							},
						},
					}}
				/>
				<ColorContextParent>
					<AuthContextComponent>
						<App />
					</AuthContextComponent>
				</ColorContextParent>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
