import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function TwitterCheck() {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (username == "") {
        setStatus("Please enter a valid name");
      } else {
        const data = await axios.get(`/api/search?q=${username}`);
        data.data.errors ? setStatus("Available!") : setStatus("Taken");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-[#1DA1F2] w-full h-screen flex flex-col gap-4 items-center justify-center"
      >
        <Image
          className="mb-12"
          src="/twitter.png"
          alt="twitter logo"
          height={100}
          width={100}
        />
        <h1 className="text-3xl text-white items-center text-center">
          {status}
        </h1>
        <input
          type="text"
          maxLength="15"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username..."
          className="placeholder:italic rounded
          border-none pl-2"
        ></input>
        <button
          type="submit"
          className="h-12 w-40 bg-white text-[#1DA1F2] rounded-full"
        >
          Check
        </button>
      </form>
    </>
  );
}
