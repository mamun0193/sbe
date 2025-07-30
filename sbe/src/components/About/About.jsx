import React from 'react';

const About = () => {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-400 mb-4">About the SBE Club</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Empowering students in biotechnology with practical skills, interdisciplinary learning, and industry exposure.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To foster a collaborative environment where students can enhance their technical and soft skills through real-world exposure, hands-on projects, and active participation in the field of biological engineering.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To become the leading student-led biotechnology club at UIET, recognized for our impactful initiatives, national-level events, and dedication to scientific innovation and excellence.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-6">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-black/30 backdrop-blur shadow-md rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Skill Workshops</h3>
              <p className="text-gray-300">Hands-on sessions in biotech tools, bioinformatics, and scientific computing.</p>
            </div>
            <div className="bg-black/30 backdrop-blur shadow-md rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Research Guidance</h3>
              <p className="text-gray-300">Support for students in research projects, internships, and paper publishing.</p>
            </div>
            <div className="bg-black/30 backdrop-blur shadow-md rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Events & Outreach</h3>
              <p className="text-gray-300">Seminars, fests, and community engagement with academic and industrial experts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;