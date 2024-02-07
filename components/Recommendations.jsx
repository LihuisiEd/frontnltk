'use client'
import React, { useState } from "react";

export default function SearchAndRecommendations() {
    const [movieTitle, setMovieTitle] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const URL = '';

    const loadRecommendations = async () => {
        try {
            setLoading(true);
            if (movieTitle.trim() !== "") {
                const recommendationsResponse = await fetch(
                    `${URL}/recommendations/${encodeURIComponent(
                        movieTitle
                    )}`
                );

                if (recommendationsResponse.ok) {
                    const recommendationsData = await recommendationsResponse.json();
                    setRecommendations(recommendationsData.recommendations);
                    setError(null);
                } else {
                    setError("Error loading recommendations from the API");
                }
            }
        } catch (error) {
            setError("Error in the API call");
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        loadRecommendations();
    };

    return (
        <div className="mx-auto container p-10 mt-16 bg-orange-100 rounded-t-3xl">
            <form
                id="search-form"
                onSubmit={handleSearch}
                method="GET"
                className="flex gap-4"
            >
                <input
                    type="text"
                    className="search-input bg-gray-50 border text-gray-900 text-sm rounded-lg  outline-orange-500 block w-full p-2.5"
                    placeholder="Search"
                    name="movie_title"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="bg-orange-400 rounded-lg p-2.5 text-white cursor-pointer"
                    disabled={loading}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            {recommendations.length > 0 && !loading && !error && (
                <div className="data-container mx-auto container p-10 h-fit mb-16 bg-orange-50 rounded-b-3xl font-bold">
                    <span className="text-2xl span-message text-orange-400">
                        Try searching &quot;The Avengers&quot;
                    </span>

                    <div className="movie-title hidden text-7xl text-orange-500 py-4">
                        {/* Puedes mostrar aquí el título de la película si lo necesitas */}
                    </div>

                    <div>
                        <ul className="recommendations-list list-decimal list-inside space-y-3 p-10 text-zinc-700 text-2xl">
                            {recommendations.map((recommendation, index) => (
                                <li key={index}>{recommendation}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}