import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/AxiosInstance";

import "../styles/News.css";

const ALL_CATEGORIES = [
  "technology",
  "science",
  "sports",
  "economy",
  "health",
  "business",
  "entertainment",
  "politics",
  "world",
  "education"
];

export default function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([ALL_CATEGORIES[0]]);

  const fetchNews = async (categories) => {
    try {
      const interests = categories;
      const response = await axiosInstance.post("/news/fetch", { interests });
      setArticles(response.data.articles || []);
      setError("");
    } catch (err) {
      setArticles([]);
      setError(err.response?.data?.message || "Failed to fetch news.");
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchNews(selectedCategories);
  }, [selectedCategories]);

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  return (
    <div className="container">
      <h2 className="title">News Based on Your Interests</h2>
      <div className="categories">
        <span className="categoryLabel">Categories:</span>
        {ALL_CATEGORIES.map((cat) => (
          <span
            key={cat}
            className={
              "categoryButton" +
              (selectedCategories.includes(cat) ? " selected" : "")
            }
            onClick={() => handleCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </span>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      <div>
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="card"
          >
            {article.image && (
              <img
                src={article.image}
                alt=""
                className="image"
              />
            )}
            <div className="content">
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px 0", color: "#222" }}>{article.title}</h3>
              <p style={{ fontSize: 16, color: "#444", margin: "0 0 12px 0" }} dangerouslySetInnerHTML={{ __html: article.description }}></p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", fontWeight: 600, textDecoration: "none" }}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
