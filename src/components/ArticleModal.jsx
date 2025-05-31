import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

const renderContent = (content) => {
  if (!content) return null;

  return content.map((item, index) => {
    switch (item.type) {
      case "heading":
        return <h3 key={index} className="text-2xl font-bold text-gray-900 mb-4">{item.text}</h3>;
      case "paragraph":
        return <p key={index} className="text-gray-700 mb-6 leading-relaxed">{item.text}</p>;
      case "section":
        return (
          <div key={index} className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {item.items.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        );
      default:
        return null;
    }
  });
};

const ArticleModal = ({ post, onClose }) => {

  if (!post) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1 rounded-full bg-white/80 backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* المحتوى */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* الصورة */}
          <div className="h-64 md:h-full relative">
            <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div>
                <div className="flex items-center text-white mb-3">
                  {post.icon}
                  <span className="ml-2">{post.category}</span>
                </div>
                <h1 className="text-2xl font-bold text-white">{post.title}</h1>
                <div className="flex items-center mt-2 text-white/80 text-sm">
                  <FiClock className="mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* التفاصيل */}
          <div className="p-6">
            <div className="prose prose-sm max-w-none">
              {renderContent(post.content)}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition"
              >
                ← Back to Articles
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArticleModal;
