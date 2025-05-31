import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

const ArticlesGrid = ({ posts, onSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {posts.map((post) => (
      <motion.div
        key={post.id}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => onSelect(post)}
      >
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="p-5">
          <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
            <span className="flex items-center">{post.icon}<span className="ml-1">{post.category}</span></span>
            <span className="flex items-center"><FiClock className="mr-1" />{post.readTime}</span>
          </div>
          <h2 className="font-bold text-gray-900 mb-1 line-clamp-2">{post.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default ArticlesGrid;
