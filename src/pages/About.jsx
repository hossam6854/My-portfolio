const About = () => {
  return (
    <section className="container mx-auto px-6 py-12 text-center bg-gray-50">
      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-blue-900">Who Am I?</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        I'm <span className="font-semibold text-blue-600">Hossam Sayed</span>, a
        passionate{" "}
        <span className="font-semibold text-blue-600">Front-End Developer</span>{" "}
        specializing in modern, responsive, and high-performance web
        applications. I focus on delivering seamless user experiences through{" "}
        <span className="font-semibold">React, JavaScript, and TypeScript</span>
        , ensuring clean and efficient code.
      </p>

      {/* Core Skills */}
      <div className="mt-10">
        <h3 className="text-3xl font-semibold text-blue-900 mb-4">
          Core Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "JavaScript ES6",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Git",
            "GitHub",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-14">
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">
          Certifications
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-800">
          
          <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-semibold">
              Responsive Web Design – FreeCodeCamp
            </h4>
            <p className="text-gray-600 text-sm">
              Building responsive websites
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-semibold">
              Front-End Web Development – Ministry of Communications and Information Technology
            </h4>
            <p className="text-gray-600 text-sm">
              learning HTML, CSS, and JavaScript
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-semibold">
            اساسيات التسويق الرقمي – google</h4>
            <p className="text-gray-600 text-sm">
            Google's digital marketing course
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-14">
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">
          My Journey
        </h3>
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-8 max-w-3xl mx-auto">
          <div>
            <h4 className="text-xl font-semibold text-blue-800">
              2023 - Present
            </h4>
            <p className="text-gray-700">
              Working on React and Node.js projects, improving front-end
              performance.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-800">2022</h4>
            <p className="text-gray-700">
              Developed full-stack applications and mastered RESTful API
              integration.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-800">2021</h4>
            <p className="text-gray-700">
              Started my coding journey with HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default About;
