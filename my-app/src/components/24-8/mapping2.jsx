import React, { useState } from "react";

function Mapping2(props) {
	console.log("mapping 2");
	const [products, Setproducts] = useState([
		{
			name: "Shirt",
			brand: "levi's",
			image:
				"https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/n/r/1/xl-iinsf-895navy-indian-needle-original-imagx3yd8qjkkh9z.jpeg?q=20&crop=true",
			size: 40,
			price: "Rs.800",
		},
		{
			name: "T-shirt",
			brand: "mufti",
			image:
				"https://files.cdn.printful.com/o/upload/bfl-image/52/10412_l_camping%20graphics%20by%20BOSS.jpg",
			size: 42,
			price: "Rs.1200",
		},
		{
			name: "Jeans",
			brand: "CK",
			image:
				"https://m.media-amazon.com/images/I/71S0IJB5JrL._AC_UF1000,1000_QL80_.jpg",
			size: 32,
			price: "Rs.2000",
		},
		{
			name: "Shoes",
			brand: "Nike",
			image:
				"https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg",
			size: 42,
			price: "Rs.2500",
		},
		{
			name: "Kurta",
			brand: "Manyavar",
			image:
				"https://www.jiomart.com/images/product/original/rvf2eshey4/crystal-revenue-men-s-cotton-ethnic-motifs-mirror-work-kurta-set-for-festival-and-wedding-wear-blue-medium-product-images-rvf2eshey4-0-202308101705.jpg?im=Resize=(500,630)",
			size: 38,
			price: "Rs.1800",
		},
		{
			name: "T-shirt",
			image:
				"https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/n/r/1/xl-iinsf-895navy-indian-needle-original-imagx3yd8qjkkh9z.jpeg?q=20&crop=true",
			size: 42,
			price: "Rs.1200",
		},
		{
			name: "T-shirt",
			brand: "mufti",
			image:
				"https://files.cdn.printful.com/o/upload/bfl-image/52/10412_l_camping%20graphics%20by%20BOSS.jpg",
			size: 42,
			price: "Rs.1200",
		},
		{
			name: "Jeans",
			brand: "CK",
			image:
				"https://m.media-amazon.com/images/I/71S0IJB5JrL._AC_UF1000,1000_QL80_.jpg",
			size: 32,
			price: "Rs.2000",
		},
		{
			name: "Shoes",
			brand: "Nike",
			image:
				"https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg",
			size: 42,
			price: "Rs.2500",
		},
		{
			name: "Kurta",
			brand: "Manyavar",
			image:
				"https://www.jiomart.com/images/product/original/rvf2eshey4/crystal-revenue-men-s-cotton-ethnic-motifs-mirror-work-kurta-set-for-festival-and-wedding-wear-blue-medium-product-images-rvf2eshey4-0-202308101705.jpg?im=Resize=(500,630)",
			size: 38,
			price: "Rs.1800",
		},
	]);
	return (
		<div>
			<h1>Products page</h1>
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
							{p.brand}
						</p>
						<p
							style={{ marginTop: "-5%", fontSize: "10px", fontWeight: "bold" }}
						>
							{p.name}
						</p>
						<p
							style={{ marginTop: "-5%", fontSize: "10px", fontWeight: "bold" }}
						>
							{p.size}
						</p>
						<p
							style={{ marginTop: "-5%", fontSize: "10px", fontWeight: "bold" }}
						>
							{p.price}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Mapping2;
