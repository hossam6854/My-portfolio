import { useState, useMemo, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaJs, FaPaintBrush } from "react-icons/fa";
import blogPosts from "../data/articles";

const ArticlesGrid = lazy(() => import("../components/ArticlesGrid"));
const ArticleModal = lazy(() => import("../components/ArticleModal"));

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showArticles, setShowArticles] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    return activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* العنوان والفلاتر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            My <span className="text-white">Blog</span>
          </h2>
          <p className="text-xl text-gray-300">
            A collection of articles about React, JavaScript, and UI/UX design.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["All", "React", "JavaScript", "UI/UX"].map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-1.5 rounded-full font-medium flex items-center text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer"
              }`}
            >
              {category === "React" && <FaReact className="mr-2" />}
              {category === "JavaScript" && <FaJs className="mr-2" />}
              {category === "UI/UX" && <FaPaintBrush className="mr-2" />}
              {category}
            </motion.button>
          ))}
        </div>

        {!showArticles && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowArticles(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer"
            >
              Show Articles
            </button>
          </div>
        )}

        <Suspense fallback={<div className="text-white text-center mt-6">Loading articles...</div>}>
          {showArticles && (
            <ArticlesGrid posts={filteredPosts} onSelect={setSelectedPost} />
          )}
        </Suspense>
      </div>

      {/* Lazy-load Modal */}
      <AnimatePresence mode="wait">
        {selectedPost && (
          <Suspense fallback={<div className="text-white text-center mt-6">Loading article...</div>}>
            <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
