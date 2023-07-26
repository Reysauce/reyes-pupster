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
    setIsThumbsClick(!isThumbsClick);
  };
  const handleTUClick = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;
    console.log(getRandomNumber());
    if (getRandomNumber() === luckyNumber) {
      setPupLikes(pupLikes + 1);
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
    <>
      <h1>Make new friends</h1>
      <h3>Thumbs up to any dogs you like!</h3>
      <div className="relative">
        <img src={data} alt="dog pic" style={{ width: 300, height: 300 }} />

        <button className="absolute bottom-0" onClick={() => handleTDClick()}>
          &#x1f44e;
        </button>
        <button
          className="absolute bottom-0 left-56"
          onClick={() => handleTUClick()}
        >
          &#x1f44d;
        </button>
      </div>
      <h2>Made friends with {pupLikes} pups so far!</h2>
    </>
  );
}
