import React, { useState } from "react";
import { useRouter } from "next/router";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        feedback,
        rating,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("Thank you for your feedback!...Redirecting back to home");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      setMessage(
        "There was an error submitting your feedback. Please try again."
      );
    }

    setName("");
    setEmail("");
    setFeedback("");
    setRating(1);
  };

  return (
    <div className="flex justify-center items-center bg-black min-h-screen p-8">
      <div className=" text-white w-full max-w-xl  bg-gray-900 rounded-lg p-6 mb-6 shadow-lg border border-gray-700 mt-16">
        <h2 className="text-3xl font-semibold text-center text-blue-400 mb-8">
          We Value Your Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="feedback" className="text-lg mb-2 font-medium">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              placeholder="Describe your experience..."
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="rating" className="text-lg mb-2 font-medium">
              Your Rating (1-5)
            </label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled hidden>
                Select a rating
              </option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Feedback
          </button>
        </form>

        {message && (
          <div className="mt-6 text-center text-xl text-green-500">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default contact;
