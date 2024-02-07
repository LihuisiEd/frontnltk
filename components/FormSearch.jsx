'use client'
import React, { useState, useEffect } from "react";

export default function FormSearch() {
    const [movieTitle, setMovieTitle] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(movieTitle);
    };
    return (
        <div class="mx-auto container p-10 mt-16 bg-orange-100 rounded-t-3xl">
            <form id="search-form" method="GET" class="flex gap-4">
                <input type="text"
                    class="search-input bg-gray-50 border text-gray-900 text-sm rounded-lg  outline-orange-500 block w-full p-2.5"
                    placeholder="Search" name="movie_title" value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                    required></input>
                <button type="submit" class="bg-orange-400 rounded-lg p-2.5 text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </button>
            </form>
        </div>
    )
}