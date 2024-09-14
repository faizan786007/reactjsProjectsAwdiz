import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Product = () => {
	const [products, setProducts] = useState([]);
	async function getAllProducts() {
		toast("products page..");
		const response = await axios.get("https://fakestoreapi.com/products");
		// console.log("response", response.data);
		setProducts(response.data);
	}
	// useEffect(() => {
	// 	getAllProducts();
	// }, []);
	return (
		<div>
			<h1>Products page</h1>
			{products?.length ? (
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-around",
						flexWrap: "wrap",
					}}
				>
					{products.map((p) => (
						<div
							style={{
								width: "18%",
								height: "200px",
								border: "2px solid black",
								marginBottom: "20px",
							}}
						>
							<img style={{ width: "100%", height: "60%" }} src={p.image} />
							<p
								style={{
									marginTop: "-1%",
									fontSize: "0.8rem",
									fontWeight: "bolder",
								}}
							>
								{p.category}
							</p>
							<p
								style={{
									marginTop: "-5%",
									fontSize: "10px",
									fontWeight: "bold",
								}}
							>
								rating: {p.rating.rate}
							</p>
							<p
								style={{
									marginTop: "-5%",
									fontSize: "10px",
									fontWeight: "bold",
								}}
							>
								Price : ${p.price}
							</p>
							{/* <p
							style={{ marginTop: "-5%", fontSize: "10px", fontWeight: "bold" }}
						>
							{p.description}
						</p> */}
						</div>
					))}
				</div>
			) : (
				<div>
					<h1>loading......</h1>
					<button onClick={() => getAllProducts()}>Get Product</button>
				</div>
			)}
		</div>
	);
};

export default Product;
