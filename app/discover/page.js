"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Discover() {
  const [pupLikes, setPupLikes] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isThumbsClick, setIsThumbsClick] = useState(false);
  const luckyNumber = 4;
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setData(data.message);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [isThumbsClick]);
  const handleTDClick = () => {
    setIsMatch(false);
    setIsThumbsClick(!isThumbsClick);
  };
  const handleTUClick = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;
    console.log(getRandomNumber());
    if (getRandomNumber() === luckyNumber) {
      setPupLikes(pupLikes + 1);
      setIsMatch(true);
    }
    setIsThumbsClick(!isThumbsClick);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  return (
    <div class="min-h-screen bg-gray-100 flex justify-center items-center">
      <div class="w-4/5 md:w-1/2 p-8 bg-white rounded-lg shadow-md text-center">
        <h1 class="text-4xl font-bold mb-4">Make new friends</h1>
        <h3 class="text-xl font-semibold mb-4">
          Thumbs up to any dogs you like!
        </h3>
        <div class="relative">
          <img
            src={data}
            alt="dog pic"
            class="w-60 h-60 rounded-lg mx-auto mb-4"
          />

          <button
            class="absolute bottom-0 left-10 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => handleTDClick()}
          >
            &#x1f44e;
          </button>
          <button
            class="absolute bottom-0 right-10 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            onClick={() => handleTUClick()}
          >
            &#x1f44d;
          </button>
        </div>
        <h2 class="text-lg font-semibold mt-4">
          Made friends with {pupLikes} pups so far!
        </h2>
        {isMatch && <p class="text-green-600 mt-2">That pup liked you too!</p>}
      </div>
    </div>
  );
}
