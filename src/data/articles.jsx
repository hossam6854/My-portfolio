import {
    FaReact,
    FaJs,
    FaPaintBrush,
    FaDatabase,
    FaSave,
    FaLayerGroup,
  } from "react-icons/fa";
  
  // Import images
  import ReactImg from "../assets/22.png";
  import JsImg from "../assets/javascript.png";
  import DesignImg from "../assets/33.png";
  import ReduxPersistImg from "../assets/ReduxPersist.jpg";
  import LocalVsPersistImg from "../assets/LocalPersist.jpg";
  import ContextAPIImg from "../assets/contextapi.png";

const blogPosts = [
    {
      id: 1,
      title: "Advanced React Performance Optimization Techniques",
      category: "React",
      icon: <FaReact className="text-blue-500" />,
      image: ReactImg,
      readTime: "8 min read",
      description:
        "Master modern React optimization strategies including memoization, code splitting, and concurrent rendering.",
      content: [
        {
          type: "heading",
          text: "React Performance Optimization Guide",
        },
        {
          type: "paragraph",
          text: "Building high-performance React applications requires understanding both fundamental concepts and advanced optimization techniques.",
        },
        {
          type: "section",
          title: "1. Memoization Techniques",
          items: [
            "React.memo for component memoization",
            "useCallback for stable function references",
            "useMemo for expensive calculations",
          ],
        },
        {
          type: "section",
          title: "2. Code Splitting Strategies",
          items: [
            "React.lazy() for component-level splitting",
            "Dynamic imports for route-based splitting",
            "Bundle analysis with webpack-bundle-analyzer",
          ],
        },
        {
          type: "section",
          title: "3. Concurrent Mode Features",
          items: [
            "Transition API for non-urgent updates",
            "useDeferredValue for deferring re-renders",
            "Suspense for data fetching",
          ],
        },
        {
          type: "paragraph",
          text: "By implementing these techniques, you can significantly improve your application's responsiveness and reduce unnecessary re-renders.",
        },
      ],
    },
    {
      id: 2,
      title: "Modern JavaScript Patterns Every Developer Should Master",
      category: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      image: JsImg,
      readTime: "10 min read",
      description:
        "Explore essential JavaScript patterns including closures, modules, and modern async patterns.",
      content: [
        {
          type: "heading",
          text: "JavaScript Design Patterns",
        },
        {
          type: "paragraph",
          text: "Understanding these patterns will elevate your JavaScript skills and help you write more maintainable code.",
        },
        {
          type: "section",
          title: "1. Module Pattern Variations",
          items: [
            "IIFE (Immediately Invoked Function Expressions)",
            "CommonJS modules",
            "ES6 module system",
          ],
        },
        {
          type: "section",
          title: "2. Asynchronous Patterns",
          items: [
            "Promise chaining and composition",
            "Async/await best practices",
            "Error handling strategies",
          ],
        },
        {
          type: "section",
          title: "3. Functional Programming Concepts",
          items: [
            "Pure functions and side effects",
            "Higher-order functions",
            "Immutable data patterns",
          ],
        },
        {
          type: "paragraph",
          text: "These patterns form the foundation of modern JavaScript development and are essential for building scalable applications.",
        },
      ],
    },
    {
      id: 3,
      title: "Cutting-Edge UI/UX Principles for 2023",
      category: "UI/UX",
      icon: <FaPaintBrush className="text-purple-500" />,
      image: DesignImg,
      readTime: "6 min read",
      description:
        "Discover the latest UI/UX trends and fundamental principles for creating exceptional digital experiences.",
      content: [
        {
          type: "heading",
          text: "Modern UI/UX Design Principles",
        },
        {
          type: "paragraph",
          text: "Great design combines aesthetics with functionality to create seamless user experiences.",
        },
        {
          type: "section",
          title: "1. Micro-Interactions",
          items: [
            "Purposeful animation for feedback",
            "Loading state optimizations",
            "Gesture-based interactions",
          ],
        },
        {
          type: "section",
          title: "2. Accessibility First",
          items: [
            "WCAG 2.1 compliance",
            "Color contrast considerations",
            "Keyboard navigation flows",
          ],
        },
        {
          type: "section",
          title: "3. Performance-Aware Design",
          items: [
            "Designing for Core Web Vitals",
            "Optimized asset delivery",
            "Progressive loading strategies",
          ],
        },
        {
          type: "paragraph",
          text: "Implementing these principles will ensure your designs are both beautiful and functional across all devices.",
        },
      ],
    },
    {
      id: 4,
      title: "Mastering Redux Persist for Reliable State Management",
      category: "React",
      icon: <FaDatabase className="text-red-500" />,
      image: ReduxPersistImg,
      readTime: "7 min read",
      description:
        "A practical guide to integrating Redux Persist for state persistence across sessions in modern React apps.",
      content: [
        {
          type: "heading",
          text: "Why Redux Persist Matters",
        },
        {
          type: "paragraph",
          text: "Redux Persist is a powerful library that allows your Redux state to survive page reloads, significantly improving user experience in web apps.",
        },
        {
          type: "section",
          title: "1. Getting Started",
          items: [
            "Install redux-persist and configure your store",
            "Define the persistConfig and use persistReducer",
            "Wrap your app with PersistGate",
          ],
        },
        {
          type: "section",
          title: "2. Use Cases & Patterns",
          items: [
            "Persisting authentication state",
            "Whitelisting vs. blacklisting reducers",
            "Custom storage engines (e.g., sessionStorage)",
          ],
        },
        {
          type: "paragraph",
          text: "With proper setup, Redux Persist becomes a foundational tool in any scalable frontend architecture.",
        },
      ],
    },
    {
      id: 5,
      title: "Local Storage vs. Redux Persist: When and Why",
      category: "React",
      icon: <FaSave className="text-green-500" />,
      image: LocalVsPersistImg,
      readTime: "5 min read",
      description:
        "A developer-focused comparison of localStorage patterns vs. Redux Persist, and how to choose the right approach.",
      content: [
        {
          type: "heading",
          text: "Choosing the Right State Persistence Strategy",
        },
        {
          type: "paragraph",
          text: "While both localStorage and Redux Persist aim to retain data across sessions, their roles, limitations, and integration differ greatly.",
        },
        {
          type: "section",
          title: "1. Use Cases for localStorage",
          items: [
            "Saving form drafts temporarily",
            "Quick, small key-value storage",
            "Manual JSON serialization/deserialization",
          ],
        },
        {
          type: "section",
          title: "2. When to Use Redux Persist",
          items: [
            "Persisting large or complex Redux state trees",
            "Integrating with middleware (e.g., redux-thunk)",
            "Selective reducer persistence via config",
          ],
        },
        {
          type: "paragraph",
          text: "Understanding your app's architecture and user needs will help you choose the right persistence approach with confidence.",
        },
      ],
    },
    {
      id: 6,
      title: "Using Context API Effectively in Large React Apps",
      category: "React",
      icon: <FaLayerGroup className="text-indigo-500" />,
      image: ContextAPIImg,
      readTime: "6 min read",
      description:
        "Learn how to scale React's Context API without performance issues or prop drilling nightmares.",
      content: [
        {
          type: "heading",
          text: "Going Beyond the Basics with Context API",
        },
        {
          type: "paragraph",
          text: "Context API is often underrated but can be powerful when used correctly in large-scale apps.",
        },
        {
          type: "section",
          title: "1. When to Use Context",
          items: [
            "Global themes or user preferences",
            "Authentication status",
            "Shared UI state like modals or toasts",
          ],
        },
        {
          type: "section",
          title: "2. Performance Pitfalls",
          items: [
            "Re-renders of all consumers on any value change",
            "Avoiding anonymous inline functions in providers",
            "Splitting contexts for separation of concerns",
          ],
        },
        {
          type: "paragraph",
          text: "When scaled thoughtfully, Context API can simplify your app structure while keeping performance in check.",
        },
      ],
    },
  ];


  export default blogPosts;