"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Search() {
  const [pupLikes, setPupLikes] = useState(0);
  const [data, setData] = useState(null);
  const [dogPics, setDogPics] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isDogSelect, setIsDogSelect] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [unfilteredList, setUnfilteredList] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setData(data.message);
        setUnfilteredList(data.message);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  const handleDogChange = (e) => {
    setInputValue(e.target.value);

    const filteredData = Object.keys(unfilteredList).filter((item) => {
      console.log(item, "item");
      return item.includes(e.target.value);
    });
    console.log(filteredData, "filteredData");

    const filteredObject = filteredData.reduce((acc, item) => {
      console.log(item, "item", acc);
      acc[item] = item;
      return acc;
    }, {});

    setData(filteredObject);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(e.target.value);

      const filteredData = Object.keys(unfilteredList).filter((item) => {
        console.log(item, "item");
        return item.includes(e.target.value);
      });
      console.log(filteredData, "filteredData");

      const filteredObject = filteredData.reduce((acc, item) => {
        console.log(item, "item", acc);
        acc[item] = item;
        return acc;
      }, {});

      setData(filteredObject);
    }
  };

  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };
  const handleDogSelect = async (e) => {
    try {
      setIsSearchClicked(false);
      const response = await fetch(
        `https://dog.ceo/api/breed/${
          typeof e === "string" ? e : e.target.id
        }/images`
      );
      const data = await response.json();
      setDogPics(data.message);
      setIsDogSelect(true);
    } catch (error) {
      setError(error);
    }
  };
  console.log(data);

  return (
    <div class="h-screen flex flex-col justify-start items-center">
      <div class="text-center w-80 md:w-96 mt-4">
        <h1 class="text-4xl font-bold mb-2">Search By Breed!</h1>
        <div class="relative">
          <input
            type="text"
            name="breed name"
            placeholder="Type in the breed you want to search"
            class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => handleSearchClick()}
            onChange={(e) => handleDogChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("made it");
                handleDogSelect(inputValue);
              }
            }}
            value={inputValue}
          />
          <button
            onClick={() => handleDogSelect(inputValue)}
            class="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Search
          </button>
          {isSearchClicked && (
            <div class="absolute left-0 w-full mt-12 md:w-96 bg-white border rounded-lg shadow-md">
              {Object.keys(data).map((item) => (
                <p
                  key={item}
                  id={item}
                  onClick={(e) => handleDogSelect(e)}
                  class="cursor-pointer text-blue-600 hover:underline px-4 py-2"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div class="mt-8">
        {isDogSelect &&
          dogPics.map((item, index) => (
            <img
              src={item}
              alt={item}
              width="300"
              height="300"
              class="my-4 rounded-lg shadow-md"
            />
          ))}
      </div>
    </div>
  );
}
