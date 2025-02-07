import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-20 px-8 bg-black text-center text-gray-100 py-12 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-12 animate-pulse">
        📜 Code Chronicles – Unravel. Innovate. Dominate. 📜
      </h1>

      <h2 className="text-3xl font-semibold text-purple-400 mb-4">
        🔥 Why Be a Part of Code Chronicles? 🔥
      </h2>
      <ul className="text-lg space-y-4 text-gray-300">
        <li>
          🚀 <span className="font-bold text-blue-500">Master the Craft</span> – Explore expert coding insights, best practices, and industry secrets.
        </li>
        <li>
          💡 <span className="font-bold text-yellow-500">Innovate & Create</span> – Build projects that matter, push boundaries, and unleash your potential.
        </li>
        <li>
          🧩 <span className="font-bold text-green-500">Solve & Conquer</span> – Tackle algorithmic challenges and real-world coding scenarios.
        </li>
        <li>
          🤝 <span className="font-bold text-red-500">Forge Connections</span> – Join a global community of passionate developers and tech enthusiasts.
        </li>
      </ul>

      <p className="text-lg mt-8 font-semibold tracking-wide">
        At <span className="text-orange-400 font-bold">Code Chronicles</span>, we celebrate
        <span className="italic text-pink-400"> perseverance, innovation, and the spirit of coding</span>.
        Whether you’re a beginner or a seasoned developer, there's always a new chapter to explore!
      </p>

      <p className="text-2xl font-extrabold text-cyan-300 mt-8 animate-bounce">
        Are you ready to script your own legacy? 🚀💻
      </p>

      <Link href="/blogs">
        <button
          className="mt-8 px-8 py-4 bg-pink-600 text-white text-lg font-bold rounded-full shadow-md 
      hover:bg-pink-700 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          👉 Begin Your Journey!
        </button>
      </Link>
    </div>
  );
};

export default About;
