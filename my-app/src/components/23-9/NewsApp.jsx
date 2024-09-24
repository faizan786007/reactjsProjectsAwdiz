import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsApp.css";
// ed894dde948f437c96b4da23a69e2166
const NewsApp = () => {
	const [news, setNews] = useState([]);
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	async function fetchNews(category) {
		if (!category) {
			setError("enter a category");
			return;
		}
		setError(null);
		setLoading(true);
		const options = {
			method: "GET",
			url: `https://google-news13.p.rapidapi.com/${category}`,
			params: { lr: "en-US" },
			headers: {
				"x-rapidapi-key": "6b7f978168msh6774720a7852117p1c5e9fjsn919f4a2dc21f",
				"x-rapidapi-host": "google-news13.p.rapidapi.com",
			},
		};

		try {
			const response = await axios.request(options);
			console.log(response.data.items);
			setNews(response.data.items);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
			setError("error catching news");
		}
		// setCategory("");
	}

	// useEffect(() => {
	// 	fetchNews();
	// }, []);
	// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
	return (
		<div>
			<h1>search news by categories</h1>
			<div className="input-category">
				{/* <input
					type="text"
					placeholder="enter category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/> */}
				<select
					className="drop-down-list"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="latest">Latest</option>
					<option value="business">Business</option>
					<option value="entertainment">Entertainment</option>
					<option value="health">Health</option>
					<option value="science">Science</option>
					<option value="sport">Sports</option>
					<option value="technology">Technology</option>
				</select>

				<button onClick={() => fetchNews(category)}>search</button>
			</div>
			{error && <p>{error}</p>}
			{loading && <p>{loading}</p>}
			{news.length > 0 ? (
				<ul>
					{news.map((article, index) => (
						<li key={index} style={{ marginBottom: "20px" }}>
							{article.images && article.images.thumbnail && (
								<img
									src={article.images.thumbnailProxied}
									alt={article.title}
									style={{ width: "100%", height: "auto", maxWidth: "300px" }}
								/>
							)}
							<a
								href={article.newsUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<h3>{article.title}</h3>
							</a>
							<p>
								<strong> Publisher: {article.publisher}</strong> |
								<span className="datee">
									Date:
									{new Date(Number(article.timestamp)).toLocaleDateString()}
								</span>
							</p>
							<p>{article.snippet}</p>
						</li>
					))}
				</ul>
			) : (
				!loading && <p>No articles found for this category.</p>
			)}
		</div>
	);
};

export default NewsApp;
