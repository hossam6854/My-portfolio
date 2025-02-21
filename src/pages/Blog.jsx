import { useState } from "react";
import Image from "../assets/11.png";
import Image1 from "../assets/22.png";
import Image2 from "../assets/33.png";

const blogPosts = [
  {
    id: 1,
    title: "Best React Practices for Performance Optimization",
    category: "React",
    image: Image1,
    description:
      "A comprehensive guide to optimizing React applications using techniques like Memoization and Lazy Loading.",
    content: `
      In this article, we will discuss how to enhance the performance of React applications using various techniques:

      ✅ Using React.memo, useCallback, and useMemo:
      - React.memo helps reduce unnecessary re-renders.
      - useCallback and useMemo optimize function and value storage to prevent re-creation on each render.

      ✅ Lazy Loading:
      - Improve loading performance with React.lazy() and Suspense, allowing components to load only when needed.

      ✅ Efficient Virtual DOM Handling:
      - Use the key prop correctly in map() to optimize list rendering.
      - Avoid unnecessary state updates to minimize re-renders.

      ✅ Reducing Re-renders:
      - Use shouldComponentUpdate (for class components).
      - Implement useEffect efficiently to prevent redundant operations.

      🎯 By following these techniques, you can build fast, optimized React applications that enhance user experience and reduce resource consumption.
    `,
  },
  {
    id: 2,
    title: "Essential JavaScript Concepts Every Developer Should Know",
    category: "JavaScript",
    image: Image,
    description:
      "Key concepts you need to master JavaScript deeply, such as Scope, Closures, and the Event Loop.",
    content: `
      JavaScript is a dynamic programming language. To truly master it, you need to understand:

      ✅ Scope and Understanding Lexical vs. Dynamic Scope:
      - Lexical Scope: Determined at the time of code writing, allowing inner functions to access variables in their parent scope.
      - Dynamic Scope: Not used in JavaScript but important to differentiate from other languages like Python.

      ✅ Closures:
      - Closures allow functions to retain access to values even after their parent scope exits.
      - Used in Callbacks, setTimeout, and performance optimizations.

      ✅ Event Loop:
      - Understanding the Event Loop is crucial for managing asynchronous operations such as API calls and Promises.
      - JavaScript executes code via the Call Stack and Task Queue, allowing efficient async programming.

      🎯 Mastering these concepts will help you write more efficient JavaScript and understand how it works under the hood.
    `,
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Creating Outstanding User Experiences",
    category: "UI/UX",
    image: Image2,
    description:
      "Learn how to design professional UI/UX interfaces based on best practices for an excellent user experience.",
    content: `
      Good design is key to a successful application. Here are fundamental UI/UX principles:

      ✅ Simplicity:
      - Keep designs simple and focused on content instead of unnecessary elements.
      - Ensure interfaces are intuitive and easy to navigate.

      ✅ Visual Hierarchy:
      - Use typography, colors, and sizes to guide user attention.
      - Structure content based on importance.

      ✅ Responsive Design:
      - Utilize CSS Flexbox and Grid for a seamless experience across devices.
      - Test responsiveness to ensure a smooth user experience on different screen sizes.

      ✅ Performance & Interaction:
      - Improve site speed by optimizing images, reducing HTTP requests, and implementing lazy loading.

      🎯 Following these principles will help you create professional UI/UX designs that enhance user experience and engagement.
    `,
  },
];

const categories = ["All", "React", "JavaScript", "UI/UX"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-blue-900 text-center">Blog</h2>
      <p className="text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
        Explore technical articles covering React, JavaScript, and UI/UX topics to help you learn and grow.
      </p>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all cursor-pointer duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Blog Posts */}
      {!selectedPost ? (
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary">{post.title}</h3>
                <p className="text-gray-700 mt-2">{post.description}</p>
                <span className="text-primary font-medium mt-4 block">Read More →</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Display Full Blog Post
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
          <button
            className="mb-4 text-primary font-medium hover:underline"
            onClick={() => setSelectedPost(null)}
          >
            ← Back to Blog
          </button>
          <h3 className="text-3xl font-bold text-primary">{selectedPost.title}</h3>
          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover my-4 rounded-lg" />
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedPost.content}</p>
        </div>
      )}
    </section>
  );
};

export default Blog;
